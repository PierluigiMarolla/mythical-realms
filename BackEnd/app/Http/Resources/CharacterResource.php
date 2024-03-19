<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class CharacterResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'name' => $this->name,
            'avatar_url' => Storage::url($this->avatar_url),
            // If you want to include the user's details, you can do so here
            'user' => new UserResource($this->whenLoaded('user')),
            // Other attributes you want to include in the JSON response
        ];
    }
}