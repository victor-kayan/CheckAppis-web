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
        <label>Publicação</label>
        <div class="pull-right">
            <a class="btn btn-primary" href="{{ route('publicacao.edit') }}" role="button">Criar nova</a>
        </div>
    </div>
    <div class="card-body low">
        @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div><br />
        @endif

        <form method="post" action="{{ route('publicacao.store') }}">
            @csrf
            <div class="form-group">
                <label for="price">Titulo</label>
                <input type="text" class="form-control" name="titulo" />
            </div>
            <div class="form-group">
                <label for="comment">Descrição:</label>
                <textarea class="form-control" name="descricao" rows="5" id="comment"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Adicionar</button>
        </form>
    </div>
</div>
@endsection