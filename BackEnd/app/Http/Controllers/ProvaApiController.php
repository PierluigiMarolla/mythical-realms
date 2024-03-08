<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;

class ProvaApiController extends Controller
{
    public function index(){
        {
            $users = User::all();

            $data = [
                'status' =>200,
                'user' =>$users
            ];

            return response()->json($data,200);
        }
    }
}
