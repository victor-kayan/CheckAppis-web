<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PublicacaoApiController extends Controller
{
    public function indexJson(){
        $publicacao = \App\Publicacao::all();

        return response()->json([
            'data' => "publicacoes" => $publicacao
        ]);
    }
}
