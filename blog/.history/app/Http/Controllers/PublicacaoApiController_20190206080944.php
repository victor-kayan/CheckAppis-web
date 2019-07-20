<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PublicacaoApiController extends Controller
{
    public function index(){
        $publicacao = \App\Publicacao::all();

        return $publicacao;
    }
}
