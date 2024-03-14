<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'avatar_url' => $this->avatar_url ? Storage::url($this->avatar_url) : '',
            $this->mergeWhen(
                $this->posts->isNotEmpty() && $request->route()->getName() !== 'users.index',
                [
                    // This will only be included if the user has posts (i.e. the collection is not empty)
                    'posts' => PostResource::collection($this->posts),
                ]
            ),
        ];
    }
}