@extends('layout')

@section('content')
<style>
.uper {
    margin-top: 40px;
    margin-bottom: 50px;
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
            <a class="btn btn-primary" href="{{ route('publicacao.create') }}" role="button">Criar nova</a>
        </div>
    </div>
    <div class="card-body low">
        @if(session()->get('success'))
        <div class="alert alert-success">
            {{ session()->get('success') }}
        </div><br />
        @endif
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Descricao</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            @foreach ($publicacoes as $p)
            <tbody>
                <tr>
                    <td scope="row">{{ $p->id }}</td>
                    <td>{{ $p->titulo }}</td>
                    <td>{{ $p->descricao }}</td>
                    <td>
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <form action="{{ route('publicacao.destroy', $p->id)}}" method="post">
                                @csrf
                                @method('DELETE')
                                <button class="btn btn-secondary" type="submit">Editar</button>
                                <button class="btn btn-secondary" type="submit">Remover</button>
                            </form>
                        </div>
                    </td>
                </tr>
            </tbody>
            @endforeach
        </table>
    </div>
</div>
@endsection