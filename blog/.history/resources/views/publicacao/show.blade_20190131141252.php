@extends('layout')

@section('content')
<style>
.uper {
    margin-top: 40px;
}

.low {
    margin-top: 20px;
}
</style>
<div class="card uper">
    <div class="card-header">
        <label>Lista de publicações</label>
        <div class=text-right>
        <a class="btn btn-primary" href="{{ route('publicacao.create') }}" role="button">Criar nova</a>
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