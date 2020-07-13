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
}
