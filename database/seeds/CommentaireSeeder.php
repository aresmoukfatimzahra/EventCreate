<?php

use Illuminate\Database\Seeder;

class CommentaireSeeder extends Seeder
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
            \App\Commentaire::create([
                'message'=>$faker->text(30)

            ]);
        }
    }
}
