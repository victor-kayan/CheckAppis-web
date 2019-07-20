<?php

use Illuminate\Database\Seeder;
use App\Admin;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        factory(App\Publicacao::class, 30)->create();

        // $admin = Admin([
        //     "name" => "admin",
        //     "email" => "admin@gmail.com",
        //     "password" => "123456",
        //     "password" => "123456"
        // ]);

        $admin->save();
    }
}
