<?php

namespace App\GraphQL\Query;

use Folklore\GraphQL\Support\Query;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use App\Publicacao;
use GraphQL;

class PublicacaoQuery extends Query
{
    protected $attributes = [
        'titulo' => 'Publicacao',
        'descricao' => 'Publicacao query'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('Publicacao'));
    }

    public function args()
    {
        //return null;
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {

        return Publicacao::all();
    }
}
