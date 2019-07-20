<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminLoginController extends Controller
{

    public function __construct(){
        $this->middleware('guest:admin');
    }

    public function login(Request $request) {
        
        $this->validate($request , [
            'email' => 'required|string',
            'password' => 'required'
        ]);

        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];

        $authOK = Auth::guard('admin')->attemp($credentials, $request->remember);

        if($authOK) {
            return "OK;"
        } 

        return "Erro";
    }
}
