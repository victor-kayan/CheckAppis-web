<?php

namespace App\GraphQL\Mutation;

use Folklore\GraphQL\Support\Mutation;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use GraphQL;
use App\Publicacao;

class CreatePublicacaoMutation extends Mutation
{
    protected $attributes = [
        'name' => 'CreatePublicacao',
        'description' => 'A mutation'
    ];

    public function type()
    {
        return GraphQL::type('Publicacao');
    }

    public function args()
    {
        return [
            'titulo' => [
                'type' => Type::nonNull(Type::string())
            ],
            'descricao' => [
                'type' => Type::nonNull(Type::string())
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
