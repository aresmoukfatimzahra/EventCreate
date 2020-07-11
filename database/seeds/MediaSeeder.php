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
            \App\User::create([
                'name'=>$faker->text(10),
                'email'=>$faker->email,
                'password'=>sha1(1234),

            ]);
        }
//        4 artistes fixtures
        for($i=0;$i<5;$i++){
            \App\User::create([
                'name'=>$faker->text(10),
                'email'=>$faker->email,
                'password'=>sha1(1234),



            ]);
        }

        $roles=['admin','user','organisateur','artist','super_admin'];
        for($i=0;$i<5;$i++){
            \App\Role::create([
                'libelle'=>$roles[$i],
                'user_id'=>intval($i+1)
            ]);
        }
        //4 artists
        for($i=6;$i<=10;$i++){
            \App\Role::create([
                'libelle'=>$roles[3],
                'user_id'=>intval($i)
            ]);
        }
        $url=[
            "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
            ' https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
            "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
            'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
            "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
            "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
            ' https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
            "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
            'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
            "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
        ];
        for($i=6;$i<10;$i++){

            \App\Media::create([
                'title'=>$faker->text(10),
                'url'=>$url[$i],
                'event_id'=>App\Event::all()->random(1)[0]->id,
                'user_id'=>intval($i)

            ]);
        }

//        4 medias for artists
        $artists=[1,2,3,4,5];

        for($i=0;$i<5;$i++){
            \App\Media::create([
                'title'=>$faker->text(10),
                'url'=>$url[$i],
                'event_id'=>App\Event::all()->random(1)[0]->id,
                'user_id'=>$artists[$i],

            ]);
        }
    }
}
