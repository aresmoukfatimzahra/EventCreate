<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = [];
    public function events()
    {
        return $this->belongsToMany('App\Event','category_event')->with('media')->withTimestamps();

    }
}
