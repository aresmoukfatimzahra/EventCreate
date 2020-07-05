<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
//        return Event::all();
        $events= Event::with('media')->get();
        return $events;
    }

    public function show(Event $event)
    {
        $events= Event::with('media')->get();
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
