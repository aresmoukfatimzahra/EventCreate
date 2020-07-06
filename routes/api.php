<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('events', 'EventController@index');
Route::get('users', 'EventController@userss');

Route::get('events/{event}','EventController@show');


Route::post('events/create', 'EventController@store');


Route::get('event/{id}/edit', 'EventController@edit');

Route::put('event/{event}/update', 'EventController@update');
Route::post('events', 'EventController@store');
Route::get('event_medias/{event}','EventController@showMedia');
Route::put('events/{event}', 'EventController@update');

Route::delete('events/{event}','EventController@delete');
//media
Route::get('medias', 'MediaController@index');

Route::get('medias/{media}','MediaController@show');



Route::post('medias', 'MediaController@store');

Route::put('medias/{media}', 'MediaController@update');

Route::delete('medias/{media}','MediaController@destroy');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
