<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $guarded = [];

    public function media()
    {
        return $this->hasMany('App\Media');
    }
    public function user()
    {
        return $this->belongsToMany('App\User','user_event')->withTimestamps()->with('media')->with('role');
    }
    public function categories()
    {
        return $this->belongsToMany('App\Category','category_event')->withTimestamps();
    }
    public function tags()
    {
        return $this->belongsToMany('App\Tags','tag_event')->withTimestamps();
    }
}
