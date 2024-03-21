<?php

use App\Models\Chat;
use App\Http\Resources\ChatResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\UserController;
use App\Http\Resources\CharacterResource;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\CharacterController;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

require __DIR__ . '/auth.php';

Route::middleware('auth:sanctum')->group(function () {
    Route::get('user', function () {
        return Auth::user();
    });
    Route::apiResource('users', UserController::class);
    Route::post('users/{user}/avatar', [UserController::class, 'uploadAvatar']);
    Route::apiResource('characters', CharacterController::class)->except("index");
    Route::get('characters', function () {
        $character = Auth::user()->character;
        return CharacterResource::collection($character);
    });
    Route::apiResource('chats',ChatController::class)->except("index")->except("show");
    Route::get('chats', function () {
        $chat = Auth::user()->chat;
        return ChatResource::collection($chat);
    });
    Route::get('chats/{id}' , function ($id) {
        $chat = Chat::find($id);
       return response()->json($chat);;
    });
    
    
});

Route::post('/characters/{character}/upload-avatar', [CharacterController::class, 'uploadAvatar']);
Route::post('/characters/{character}/remove-avatar', [CharacterController::class, 'removeAvatar']);
Route::get('/chats/message', [MessageController::class, 'index']);

