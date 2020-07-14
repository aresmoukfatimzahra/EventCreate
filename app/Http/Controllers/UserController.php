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
//        $events= User::all();
//      //  $events= User::with('media')->get();
//        $artists = User::with("media")->first()->get();
//        $role = Role::where('id', '=', 4)->get();
//       return ["artists"=>$artists->role,
//           'role'=>$role
//       ];
       // return $events->first();
//      $qb=DB::table('users')
//            ->join('media','media.user_id','users.id')
//            ->join('roles','user.role','roles.id')
//          ->select('users.*', 'media.url as media','media.title as titleMedia' ,'user.role as role')
//          ->where("user.role_id","=",3)
//           ->get();
//            return $qb;
        return User::with('role')->with('media')->get();
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

        return User::with('role')->with('media')->with('events')->with('media') ->whereBetween('role_id', [1, 5])->where('id','=',$user->id)->get();
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
