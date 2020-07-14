<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    /**
     * liste users
     */
    public function liste(){
        $users=User::all();
        return response()->json($users, 201);
    }

    /**
     * show user detaille
     */
    public function show($id){
        $user=User::find($id);
        return response()->json($user, 201);
    }

    public function edit($id){
        $user=User::find($id);
        return response()->json($user, 200);
    }

    public function update(Request $request, User $user)
    {
        $user->update($request->all());

        return response()->json($user, 200);
    }
}
