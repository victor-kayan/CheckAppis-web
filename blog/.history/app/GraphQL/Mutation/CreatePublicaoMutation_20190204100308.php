<?php

namespace App\GraphQL\Mutation;

use Folklore\GraphQL\Support\Mutation;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use App\Publicacao
use GraphQL;

class CreatePublicaoMutation extends Mutation
{
    protected $attributes = [
        'name' => 'CreatePublicao',
        'description' => 'Publicacao mutation'
    ];

    public function type()
    {
        return GraphQL::type('Publicacao');
    }

    public function args()
    {
        return [
            'titulo' => [
                'type' => Type::nonNull(Type::string)
            ],

            'descricao' => [
                'type' => Type::nonNull(Type::string)
            ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $publicacao = new Publicacao();
        $publicacao->fill($args);
        $publicacao->save();

        return $publicacao;
    }
}
