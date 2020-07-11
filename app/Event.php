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
        return $this->belongsToMany('App\User','user_event')->withTimestamps();
    }
}
