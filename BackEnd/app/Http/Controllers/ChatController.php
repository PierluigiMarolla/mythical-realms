<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCharactersRequest;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\CharacterResource;
use App\Models\Chat;

class ChatController extends Controller
{
    public function index()
    {
        $chat = Chat::all();
        return response()->json($chat);
    }

    public function show($id)
    {
        $chat = Chat::find($id);
       return response()->json($chat);
    }

    /* public function store(StoreCharactersRequest $request)
    {
        $request->validate([
            'name' => 'required|string',
            'avatar_url' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
        ]);

        $imageName = Str::random(10) . '.' . $request->image->getClientOriginalExtension();
        $request->image->storeAs('storage', $imageName, 'public');

        $chat = Chat::create([
            'name' => $request->name,
            'avatar_url' => 'storage/' . $imageName,
        ]);

        return new CharacterResource($chat);
    }

    public function uploadAvatar(Request $request, Chat $chat)
    {
        $request->validate([
            'avatar' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($chat->avatar_url) {
            Storage::disk('public')->delete($chat->avatar_url);
        }

        $filePath = $request->file('avatar')->store('avatars', 'public');

        $chat->update([
            'avatar_url' => $filePath,
        ]);

        return new CharacterResource($chat);
    }

    public function removeAvatar(Chat $chat)
    {
        if ($chat->avatar_url) {
            Storage::disk('public')->delete($chat->avatar_url);
        }
        $chat->update(["avatar_url" => null]);
        return response()->json(['message' => 'Avatar rimosso con successo!']);
    } */
    
    
}

