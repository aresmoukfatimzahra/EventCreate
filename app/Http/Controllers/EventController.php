<?php

namespace App\Http\Controllers;

use App\Event;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
Use \Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class EventController extends Controller
{
    public function userss()
    {
//        return Event::all();
        $users=  \App\User::all();
        return $users;
    }
    public function index()
    {
//        return Event::all();
        $events= Event::with('media')->get();
        return $events;
    }
    public function indexOfEventsThisMonth()
    {
        $currentMonth = date('m');
        $currentYear= date('Y');
        $data = DB::table("events")
            ->join('media','media.event_id','events.id')
            ->whereRaw('MONTH(events.created_at) = ? ',[$currentMonth])
            ->whereRaw('YEAR(events.created_at) = ? ',[$currentYear])
            ->get();
        return   ['events'=>$data];
    }
    public function indexOfEventsNextMonth()
    {
        $currentMonth = date('m', strtotime('+1 month'));
        $currentYear= date('Y');
        $data = DB::table("events")
            ->join('media','media.event_id','events.id')
            ->whereRaw('MONTH(events.date) = ? ',[$currentMonth])
            ->whereRaw('YEAR(events.date) = ? ',[$currentYear])
            ->get();
        return   ['events'=>$data];
    }
    public function show(Event $event)
    {
        $events= Event::with('media')->with('user')->get();
        $re= $events->find($event);
        return ['event'=>$re,"event_medias"=>$re->media];

    }
    public function showMedia(Event $event)
    {
        return[
            'info' => $event->media
        ];

    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|max:50',
            'description' => 'required',
            'date' => 'required',

        ]);

        $event = Event::create($request->all());

        return response()->json($event, 201);
    }

    public function edit($id){
        $event=Event::find($id);
        return response()->json($event, 200);
    }

    public function update(Request $request, Event $event)
    {
        $event->update($request->all());

        return response()->json($event, 200);
    }

    public function delete(Event $event)
    {
        $event->delete();

        return response()->json(null, 204);
    }
}
