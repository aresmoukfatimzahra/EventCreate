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

//        for($i=0;$i<5;$i++){
//            \App\User::create([
//                'name'=>$faker->text(10),
//                'email'=>$faker->email,
//                'password'=>sha1(1234),
//                'role_id'=>App\Role::all()->random(1)[0]->id,
//
//
//            ]);
//        }
//
            $events=\App\Event::all()->take(5);

        for ($i = 1; $i < 5; $i++) {
            DB::table('user_event')->insert([
                'user_id' =>6,
                'event_id' => $i
            ]);
        }


    }
}
