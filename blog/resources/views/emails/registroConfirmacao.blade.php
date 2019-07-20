<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            <div class="content">
                <div class="title m-b-md">
                    <header style="position:fixed; width:100%; padding: 10px; margin-bottom:20px" >
                        <img src="{{ $message->embed(public_path('img/logo.png'))}}" alt="Logo Aqui">
                    </header>

                </div>
                <div class="links">
                    <h1>Seja bem vindo(a) <h1 style="color:#C0C0C0">{{$nome}}</h1></h1>
                    <h3>Você acabou de acessar o sistema utilizando seu email:  {{$email}}</h3>
                    <h4>Clique no link para confirmar seu email e ativar sua conta:</h4>
                    <a href="{{$link}}">Clique aqui</a>         
                </div>
            </div>
        </div>
    </body>
</html>
