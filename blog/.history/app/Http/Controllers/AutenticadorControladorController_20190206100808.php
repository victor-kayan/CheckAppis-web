<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use \Illuminate\Support\Facades\Auth;

class AutenticadorControlad orController extends Controller
{
    public function registro(Request $request) {
        //Nome email e senha
        request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed'
        ]);

        $user  = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $user->save();

        return response()->json([
            'res' => 'Usuario criado com sucesso'
        ], 201);
    }

    public function login(Request $request) {
        
        request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);


        $credenciais = [
            'email' => $request->email;
            'password' => $request->password;
        ];

        //A função attemp retorn true ou false
        if (!Auth::attemp($credenciais)){
            return response()->json([
                'res' => 'Acesso negado'
            ], 401)
        }

        $user = $request->user();
        // AccesToken retorna uma string com o token
        $token = $user->createToken('Token de acesso')->accesToken();

        return response()->json([
            'token' => $token
        ], 200); 
    }

    public function logout(Request $request) {
        //Fazendo isso o token de acesso perde a validade.
        $request->user()->token()->revoke();
        return response()->json([
            'res' => 'Deslogado com sucesso'
        ])
    }
}