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
            field :location, Types::JsonType
        ];
    }
}
