<?php

namespace App\Http\Controllers;

use App\Event;
use App\Role;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\DB;


class UserController extends Controller
{
    public function index()
    {
//        $events= User::all();
//      //  $events= User::with('media')->get();
//        $artists = User::with("media")->first()->get();
//        $role = Role::where('id', '=', 4)->get();
//       return ["artists"=>$artists->role,
//           'role'=>$role
//       ];
       // return $events->first();
      $qb=DB::table('users')
            ->join('media','media.user_id','users.id')
            ->join('roles','roles.user_id','users.id')
          ->select('users.*', 'media.url as media','media.title as titleMedia' ,'roles.libelle as role')
          ->where("roles.libelle","=","artist")
           ->get();
            return $qb;
    }
    public function show(User $user)
    {
        $qb=DB::table('users')
            ->join('media','media.user_id','users.id')
            ->join('roles','roles.user_id','users.id')
            ->select('users.*', 'media.url as media','media.title as titleMedia' ,'roles.libelle as role')
            ->where("roles.libelle","=","artist")
            ->where("users.id","=",$user->id)
            ->get();
     return $qb;


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
