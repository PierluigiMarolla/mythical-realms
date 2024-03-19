<?php

namespace Database\Seeders;

use App\Models\Chat;
use App\Models\Character;
use App\Models\User;
use Illuminate\Database\Seeder;


class ChatSeeder extends Seeder
{
    public function run()
    {
        $characters = Character::all();
        $users = User::all();


        foreach ($users as $user) {
            foreach ($characters as $character) {
                Chat::create([
                    'users_id' => $user->id,
                    'characters_id' => $character->id,
                    'title' => 'titolo di prova',
                    'logo_url' => 'https://via.placeholder.com/640x480.png/0033bb?text=voluptate',
                ]);
            }
        }
    }
}