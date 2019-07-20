<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL;
use App\Comentario;


class ComentarioType extends BaseType
{
    protected $attributes = [
        'name' => 'Comentario',
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
        ];
    }
}
