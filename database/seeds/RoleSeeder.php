<?php

use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        $roles=['admin','user','organisateur','artist','super_admin'];
        for($i=0;$i<5;$i++){
            \App\Role::create([
                'libelle'=>$roles[$i],


            ]);
        }
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
