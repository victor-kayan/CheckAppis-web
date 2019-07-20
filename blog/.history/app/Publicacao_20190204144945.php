<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Publicacao extends Model
{
    protected $fillable = [
        'titulo',
        'descricao',
    ];

    public function comentarios(){
        return $this->belongsToMany(::class);
    }
}
