@extends('layout')

@section('content')
<style>
.uper {
    margin-top: 40px;
}

.low {
    margin-top: 20px;
}

.buttonRight {
    float: left;
}
</style>
<div class="card uper">
    <div class="card-header">
        <div class="buttonRight">
            <label>Lista de publicações</label>
        </div>
    </div>
    <div class="card-body">
        <table class="table low">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Descricao</th>
                </tr>
            </thead>
            @foreach ($publicacoes as $p)
            <tbody>
                <tr>
                    <td scope="row">{{ $p->id }}</td>
                    <td>{{ $p->titulo }}</td>
                    <td>{{ $p->descricao }}</td>
                </tr>
            </tbody>
            @endforeach
        </table>
    </div>
</div>
@endsection