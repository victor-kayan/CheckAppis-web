@extends('layout')

@section('content')
<style>
.uper {
    margin-top: 40px;
    margin-bottom: 50px;
}

.uper-label {
    margin-top: 10xpx;
    margin-bottom: 30px;
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
        <img src="data:image/jpeg;base64,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"
            alt="Smiley face" height="42" width="42">

        <h6 class="uper-label"> Qtd publicações <span class="badge badge-info">{{$publicacoes->total()}}</span></h6>

        {{ csrf_field() }}
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Descricao</th>
                    <th scope="col">Comentarios</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            @foreach ($publicacoes as $p)
            <tbody>
                <tr>
                    <td scope="row">{{ $p->id }}</td>
                    <td>{{ $p->titulo }}</td>

                    @isset($p->descricao)
                    <td>{{ $p->descricao }}</td>
                    @endisset

                    @empty($p->descricao)
                    <td>__</td>
                    @endempty

                    <td>
                        @isset($p->comentarios)

                        @foreach ($p->comentarios as $c)
                        {{$c->titulo}}
                        @endforeach

                        @endisset

                        @empty($p->comentarios)
                        _____
                        @endempty

                    </td>

                    <td>
                        <div class="row">
                            <a href="{{ route('publicacao.edit',$p->id)}}" class="btn btn-secondary">Editar</a>
                            <!-- @csrf
                            @method('DELETE')
                            <a href="{{ route('teste',$p->id)}}" class="btn btn-secondary">Delete</a> -->
                            <form action="{{ route('publicacao.destroy', $p->id)}}" method="post"
                                style="margin-left:5px">
                                @csrf
                                @method('DELETE')
                                <button class="btn btn-secondary" type="submit">Remover</button>
                            </form>
                        </div>
                    </td>
                </tr>
            </tbody>
            @endforeach
        </table>

        {{$publicacoes->links()}}

    </div>
</div>

<!-- The Modal -->
<div class="modal" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Modal Heading</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                Modal body..
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>

        </div>
    </div>
</div>

@endsection