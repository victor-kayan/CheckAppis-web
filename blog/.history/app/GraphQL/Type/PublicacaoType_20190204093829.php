<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL;

class PublicacaoType extends BaseType
{
    protected $attributes = [
        'name' => 'PublicacaoType',
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
                'description'
            ],
            'descricao' => [
                'type' => Type::nonNull(Type::string()),
                'description'
            ],
        ];
    }
}
