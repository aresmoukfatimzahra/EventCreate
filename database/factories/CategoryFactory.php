<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\category;
use Faker\Generator as Faker;



$factory->define(category::class, function (Faker $faker) {

    return [
       'libelle'=>$faker->text(10)
    ];
});


