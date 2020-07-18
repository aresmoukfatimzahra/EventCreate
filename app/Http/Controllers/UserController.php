<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

use App\Event;
use App\Role;

use Illuminate\Support\Facades\DB;

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
    public function show($id)
    {
        $user = User::find($id);
        return response()->json($user, 201);

    }


    public function index()
    {

        return User::with('role')->with('media')->whereBetween('role_id', [6, 11])->get();
    }
    public function showArtist(User $user)
    {
//        $qb=DB::table('users')
//            ->join('media','media.user_id','users.id')
//            ->join('roles','roles.user_id','users.id')
//            ->select('users.*', 'media.url as media','media.title as titleMedia' ,'roles.libelle as role')
//            ->where("roles.libelle","=","artist")
//            ->where("users.id","=",$user->id)
//            ->get();
//     return $qb;

        return User::with('role')->with('media')->with('events')->with('media') ->whereBetween('role_id', [6, 11])->where('id','=',$user->id)->get();
    }

    public function showEvents(User $user)
    {
        $events= Event::with('media')->get()->find(1);


      $events=$user->events;
        foreach($events as $event) {
            $media = $event->media;
        }

        return  ['events'=>$events,"media"=>compact(array('media'))];

    }
}
