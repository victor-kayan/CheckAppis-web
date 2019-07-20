<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PublicacaoApiController extends Controller
{
    public function indexJson(){
        $publicacao = \App\Publicacao::all();
        $token = \Symfony\Component\HttpFoundation\Request->bearerToken();

        return $publicacao;
    }
}
