<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="https://www.matiereacreation.fr/wp-content/uploads/2017/03/blog-icon.png">
    <title>Blog Evocorp</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top" style="color:red">
        <!-- Brand/logo -->
        <a class="navbar-brand" href="#">
            <img src="https://www.matiereacreation.fr/wp-content/uploads/2017/03/blog-icon.png" alt="logo"
                style="width:50px;">
        </a>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">Nova publicação</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Lista de Publicações</a>
            </li>
        </ul>
    </nav>
    <div class="container">
        @yield('content')
    </div>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
        integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous">
    </script>
</body>

</html>