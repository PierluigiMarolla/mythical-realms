<?php

namespace Database\Seeders;

use App\Models\Chat;
use App\Models\MessageChat;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MessageSeeder extends Seeder
{
    public function run()
    {
        $chat = Chat::all();


        foreach ($chat as $chat) {
            MessageChat::create([
                'chat_id' => $chat->id,
                'message' => 'Messaggio di prova bello ancora più bello. Ma tu che stai guardando sei ancora più bello.No non è vero fai cacare',
            ]);
        }
    }
}
