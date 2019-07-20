<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Publicacao extends Model
{
    protected $fillable = [
        'titulo',
        'descricao',
    ];

    public function commentarios()
    {
        return $this->hasMany('App\Comentario');
    }
}
