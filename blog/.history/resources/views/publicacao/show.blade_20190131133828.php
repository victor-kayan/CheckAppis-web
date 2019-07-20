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
    Lista de publicações
  </div>
  <div class="card-body">
        <table class="table low">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Titulo:</th>
            <th scope="col">Descrição:</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            
        </tbody>
        </table>
  </div>
</div>
@endsection






