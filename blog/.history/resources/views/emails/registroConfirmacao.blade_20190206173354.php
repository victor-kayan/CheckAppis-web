<html>

<body>
    <img src="{{ $message->embed('public/img/download.jpeg') }}" alt="Logo Aqui">
    <h4>Seja bem vindo(a){{$nome}}</h4>
    <p>Você acabou de acessar o sistema utilizando seu email: {{$email}}</p>
    <p>Clique no link para confirmar seu email:</p>
    <a href="{{$link}}">Clique aqui</a>
</body>

</html>