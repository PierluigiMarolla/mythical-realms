<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;

    protected $table = 'chat';

    public $timestamps = false;

    protected $fillable = [
        'character_id',
        'title', 
        'logo_url',
    ];
}
