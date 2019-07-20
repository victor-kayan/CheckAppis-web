<?php

namespace App\GraphQL\Query;

use Folklore\GraphQL\Support\Query;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use App\Comentario;
use GraphQL;

class ComentarioQuery extends Query
{
    protected $attributes = [
        'titulo' => 'Comentario',
        'public' => 'Comentario query'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('Comentario'));
    }

    public function args()
    {
        //return null;
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return Comentario::all();
    }
}
