<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
    public function events()
    {
        return $this->belongsToMany('App\Event','tag_event')->with('media')->withTimestamps();

    }
}
