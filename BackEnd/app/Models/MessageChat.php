<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MessageChat extends Model
{
    use HasFactory;

    protected $table = 'message'; // Specifica il nome della tabella nel database

    public $timestamps = false;
    
    protected $fillable = [
        'chat_id',
        'message'
    ]; // Specifica i campi che possono essere assegnati in modo massivo

    
}
