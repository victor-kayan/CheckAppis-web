@extends('layout')

@section('content')
<style>
  .uper {
    margin-top: 40px;
  }
</style>
<div class="card uper">
  <div class="card-header">
    Publicação
  </div>
  <div class="card-body">
    @if ($errors->any())
      <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
              <li>{{ $error }}</li>
            @endforeach
        </ul>
      </div><br />
    @endif
      <form method="post">
          @csrf
          <div class="form-group">
              <label for="price">Titulo</label>
              <input type="text" class="form-control" name="share_price"/>
          </div>
          <div class="form-group">
            <label for="comment">Descrição:</label>
            <textarea class="form-control" rows="5" id="comment"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Adicionar</button>
      </form>
  </div>
</div>
@endsection