<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comentario extends Model
{
    protected $fillable = [
        'descricao',
    ];

    public function tipoRefeicao ()
    {
        return $this->belongsTo(Publicacao::class);
    }

}
