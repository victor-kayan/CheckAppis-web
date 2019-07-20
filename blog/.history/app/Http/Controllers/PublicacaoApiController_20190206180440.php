<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class PublicacaoApiController extends Controller
{
    public function indexJson(){
        $publicacao = \App\Publicacao::all();
        $user = \Illuminate\Support\Facades\Auth::user();

        $token = $user->bearerToken();

        return $publicacao;
    }
}