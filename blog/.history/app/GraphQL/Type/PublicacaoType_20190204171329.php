<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL;
use App\Publicacao;


class PublicacaoType extends BaseType
{
    protected $attributes = [
        'name' => 'Publicacao',
        'description' => 'A type'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int())
            ],
            'titulo' => [
                'type' => Type::nonNull(Type::string()),
            ],
            'comentarios' => [
                // This is saying that friends is a "list" of the type "user"
                'type' => Type::listOf(GraphQL::type('comentario')),
                'description' => 'List of comentarios.'
            ]   
        ];
    }
}
