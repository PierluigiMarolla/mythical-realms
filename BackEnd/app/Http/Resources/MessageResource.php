<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
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
            'from_id' => $this->from_id,
            'to_id' => $this->to_id,
            'body' => $this->body,
            'attachment' => $this->attachment ? Storage::url($this->attachment) : '',
            'seen' => $this->seen,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            $this->mergeWhen(
                $this->posts->isNotEmpty() && $request->route()->getName() !== 'message.index',
                [
                    // This will only be included if the user has posts (i.e. the collection is not empty)
                    'posts' => PostResource::collection($this->posts),
                ]
            ),
        ];
    }
}