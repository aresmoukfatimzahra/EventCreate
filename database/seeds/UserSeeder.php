<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
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
            \App\User::create([
                'name'=>$faker->text(10),
                'email'=>$faker->email,
                'password'=>sha1(1234),
                'role_id'=>App\Role::all()->random(1)[0]->id,


            ]);
        }
    }
}
