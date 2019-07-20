@extends('layouts.app')

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

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">

             <div class="card uper">
                <div class="card-header">
                        <label>Lista de publicações</label>
                        <div class="float-sm-right">
                            <a class="btn btn-primary" href="{{ route('publicacao.create') }}" role="button">Criar nova</a>
                        </div>
                </div>
                <div class="card-body low">
                    @if(session()->get('success'))
                    <div class="alert alert-success">
                        {{ session()->get('success') }}
                    </div><br />
                    @endif

                    <h6 class="uper-label"> Qtd publicações <span class="badge badge-info">{{$publicacoes->total()}}</span></h6>

                    {{ csrf_field() }}

                    <div class="table-responsive">
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
                    </div>

                    </br></br>

                    {{$publicacoes->links()}}
            </div>
        </div>
    </div>
</div>
@endsection


