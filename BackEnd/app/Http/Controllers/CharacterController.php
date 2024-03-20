<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCharactersRequest;
use App\Models\Character;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\CharacterResource;

class CharacterController extends Controller
{
    public function index($request)
    {
        $character = $request->user()->character;
        return CharacterResource::collection($character);
    }

    public function store(StoreCharactersRequest $request)
    {
        $request->user();
        $filePath = $request->file('avatar')->store('avatars', 'public');
        $ctrData = $request->safe()->merge(["avatar_url"=> $filePath])->except(["avatar"]);

        $character = $request->user()->character()->create($ctrData);
        
        return new CharacterResource($character);
    }

    public function uploadAvatar(Request $request, Character $character)
    {
        $request->validate([
            'avatar' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($character->avatar_url) {
            Storage::disk('public')->delete($character->avatar_url);
        }

        $filePath = $request->file('avatar')->store('avatars', 'public');

        $character->update([
            'avatar_url' => $filePath,
        ]);

        return new CharacterResource($character);
    }
    
    public function show($id)
    {
        $character = Character::find($id);
       return response()->json($character);
    }
}

