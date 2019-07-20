<?php

namespace App\GraphQL\Query;

use Folklore\GraphQL\Support\Query;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use App\COmentario;
use GraphQL;

class COmentarioQuery extends Query
{
    protected $attributes = [
        'titulo' => 'COmentario',
        'public' => 'COmentario query'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('COmentario'));
    }

    public function args()
    {
        //return null;
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return COmentario::all();
    }
}
