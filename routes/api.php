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
Route::get('events/indexOfEventsThisMonth', 'EventController@indexOfEventsThisMonth');
Route::get('events/indexOfEventsNextMonth', 'EventController@indexOfEventsNextMonth');
Route::get('users', 'EventController@userss');
Route::get('events/getRecommendedEvents/{eventId}', 'EventController@getRecommendedEvents');
Route::get('events/getdateEvents', 'EventController@getdateEvents');
Route::get('events/getFirstdateEvents', 'EventController@getFirstdateEvents');
Route::get('events/getEventByDate/{date}', 'EventController@getEventByDate');

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
Route::get('tickets', 'TicketController@index');


Route::get('medias/{media}','MediaController@show');



Route::post('medias', 'MediaController@store');

Route::put('medias/{media}', 'MediaController@update');


Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');

    Route::group([
        'middleware' => 'auth:api'
    ], function () {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });

 });
Route::get('users/liste','UserController@liste');
Route::get('user/{id}/show','UserController@show');
Route::get('showUserByRole/{libelle}','UserController@showUserByRole');

Route::delete('medias/{media}','MediaController@destroy');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();

});

//users
Route::get('artists', 'UserController@index');
Route::get('users/{user}','UserController@showArtist');
Route::get('usersShowEvents/{user}','UserController@showEvents');

//category
Route::get('categories', 'CategoryController@index');
//tags
Route::get('tags', 'TagsController@index');
