<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCharactersRequest;
use App\Http\Requests\StoreChatRequest;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\CharacterResource;
use App\Http\Resources\ChatResource;
use App\Models\Chat;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function index($request)
    {
        
        $chat = $request->user()->chat;
        return ChatResource::collection($chat);
    }

    public function show($id)
    {
        $chat = Chat::find($id);
       return response()->json($chat);
    }

    public function store(StoreChatRequest $request)
    {
        $filePath = $request->file('logo')->store('logo', 'public');
        $ctData = $request->safe()->merge(["logo_url"=> $filePath])->except(["logo"]);

        $chat = $request->user()->chat()->create($ctData);
        
        return new ChatResource($chat);
    }

    /*

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

