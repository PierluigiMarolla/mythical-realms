<?php

namespace App\Http\Controllers;

use App\Models\MessageChat;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index()
    {
        $message = MessageChat::all();
       return response()->json($message);
    }
}
