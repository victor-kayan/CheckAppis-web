<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $p = App\Publicacao::find(5);
    return view('welcome', compact('p'));
});

Route::group('/teste' , function (){
    Route::get('aqui' , 'PublicacaoController@index');
});

Route::get('/hello', function () {
    return 'Hello World';
});

Route::resource('publicacao', 'PublicacaoController');

Route::delete('teste/{id}', 'PublicacaoController@destroy')->name('teste');