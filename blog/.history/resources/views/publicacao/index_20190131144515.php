@extends('layout')

@section('content')
<style>
.uper {
    margin-top: 40px;
}

.low {
    margin-top: 20px;
}

.pull-right {
    float: right;
}
</style>
<div class="card uper">
    <div class="card-header">
        <label>Lista de publicações</label>
        <div class="pull-right">
            <a class="btn btn-primary" href="{{ route('publicacao.create') }}" role="button">Listar</a>
        </div>
    </div>
    <div class="card-body low">
        <table class="table">
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