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
   
        <a href="" class="text-right" value="Buscar" class="btn btn-primary"></a>
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
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            </tr>
        </tbody>
        </table>
  </div>
</div>
@endsection






