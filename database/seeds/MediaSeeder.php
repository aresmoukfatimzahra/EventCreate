<?php

use Illuminate\Database\Seeder;

class MediaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        for($i=0;$i<5;$i++){
            \App\Media::create([
                'title'=>$faker->text(10),
                'url'=>'https://picsum.photos/200/300'

            ]);
        }
    }
}
