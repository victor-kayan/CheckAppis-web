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
        <label>Edição de publicação</label>
        <div class="pull-right">
            <a class="btn btn-primary" href="{{ route('publicacao.index') }}" role="button">Listar</a>
        </div>
    </div>
    <div class="card-body low">

        <form method="post" action="{{ route('publicacao.update', $p->id) }}">
            @method('PATCH')
            @csrf
            <input type="hidden" value="{{$p->id}}" name="id">
            <div class="form-group">
                <label for="price">Titulo</label>
                <input type="text" class="form-control" name="titulo" value="{{$p->titulo}}" />
            </div>
            <div class="form-group">
                <label for="comment">Descrição:</label>
                <textarea class="form-control" name="descricao" value="{{$p->descricao}}"rows="5" id="comment"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Editar</button>
        </form>
    </div>
</div>
@endsection