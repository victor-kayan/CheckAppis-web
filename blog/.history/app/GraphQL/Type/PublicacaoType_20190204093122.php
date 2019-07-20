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
            
        ];
    }
}
