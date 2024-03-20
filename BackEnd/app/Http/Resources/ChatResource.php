<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ChatResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return ['id' => $this->id,
            'user_id' => $this->user_id,
            'character_id' => $this->character_id,
            'title' => $this->title,
            'logo_url' => Storage::url($this->logo_url),
            // If you want to include the user's details, you can do so here
            'user' => new UserResource($this->whenLoaded('user')),];
    }
}
