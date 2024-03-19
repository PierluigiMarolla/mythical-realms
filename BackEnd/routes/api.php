<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CharacterController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\MessageController;

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
    Route::apiResource('characters', CharacterController::class);
});

Route::post('/characters/{character}/upload-avatar', [CharacterController::class, 'uploadAvatar']);
Route::post('/characters/{character}/remove-avatar', [CharacterController::class, 'removeAvatar']);
Route::get('/chats', [ChatController::class, 'index']);
Route::get('/chats/{id}', [ChatController::class, 'show']);
Route::get('/chats/message', [MessageController::class, 'index']);

