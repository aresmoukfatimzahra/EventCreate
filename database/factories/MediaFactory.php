<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\media;
use Faker\Generator as Faker;

$factory->define(media::class, function (Faker $faker) {
    return [
        'title'=>$faker->text(10),
        'url'=>'https://picsum.photos/200/300'
    ];
});
