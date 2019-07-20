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
        @foreach($p as $publicacoes)    
        <table class="low" style="width: 100%;border:1px solid #ccc">
            <thead>
                <tr>
                    <th colspan="4">
                        <p> {{ $p->titulo}} </p>
                    </th>
                </tr>
                <tr>
                    <th style="text-align: center">id</th>
                    <th style="width:5%;text-align: center">Asset Category</th>
                    <th style="width:5%;text-align: center">Days</th>
                    <th style="width:5%;text-align: center">Qty</th>
                </tr>
            </thead>
            <tbody>
                @endif
                <tr>
                    <th style="text-align: center">{{ $value['id'] }} </th>
                    <th style="width:5%;text-align: center">{{ $value['asset_name'] }}</th>
                    <th style="width:5%;text-align: center">{{ $value['days'] }}</th>
                    <th style="width:5%;text-align: center">{{ $value['qty'] }}</th>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
@endsection