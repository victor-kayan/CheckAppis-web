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
            <input type="submit" value="Buscar" class="btn btn-primary" />
        </div>
    </div>
    <div class="card-body">
        @foreach ($publicacoes as $p)
        <table class="table low">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Descricao</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">{{ $p->id }}</td>
                    <td >{{ $p->titulo }}</td>
                    <td >{{ $p->descricao }}</td>
                </tr>
              
            </tbody>
        </table>
        @endforeach
    </div>
</div>
@endsection