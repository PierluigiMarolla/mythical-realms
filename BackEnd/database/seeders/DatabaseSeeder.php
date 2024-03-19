<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Chat;
use App\Models\Post;
use App\Models\Character;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->has(Character::factory()->count(4))->create();
            
        for ($i = 0; $i < 5; $i++) {
            $this->call([
                ChatSeeder::class,
                MessageSeeder::class
            ]);
        }
    }
}
