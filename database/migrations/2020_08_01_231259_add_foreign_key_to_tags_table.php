<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyToTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tag_event', function (Blueprint $table) {
            $table->id();
            $table->biginteger('tags_id')->unsigned();
            $table->biginteger('event_id')->unsigned();
            $table->foreign('tags_id')->references('id')->on('tags');
            $table->foreign('event_id')->references('id')->on('events');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tag_event');
    }
}
