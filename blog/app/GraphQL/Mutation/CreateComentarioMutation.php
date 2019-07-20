<?php

namespace App\GraphQL\Mutation;

use Folklore\GraphQL\Support\Mutation;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use GraphQL;
use App\Comentario;

class CreateComentarioMutation extends Mutation
{
    protected $attributes = [
        'name' => 'CreateComentario',
        'description' => 'A mutation'
    ];

    public function type()
    {
        return GraphQL::type('Comentario');
    }

    public function args()
    {
        return [
            'descricao' => [
                'type' => Type::nonNull(Type::string())
            ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $comentario = new Comentario();
        $comentario->fill($args);
        $comentario->save();

        return $comentario;
    }
}
