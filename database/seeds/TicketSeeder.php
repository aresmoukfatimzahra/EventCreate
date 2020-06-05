<?php

use Illuminate\Database\Seeder;

class TicketSeeder extends Seeder
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
            \App\Ticket::create([
                'date'=>$faker->dateTime->format('Y-m-d')

            ]);
        }
    }
}
