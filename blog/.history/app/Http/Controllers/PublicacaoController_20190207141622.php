<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Publicacao;
use App\Http\Requests\PublicacaoRequest;


class PublicacaoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function index()
    {
        $client = new \GuzzleHttp\Client();
        $request = $client->get('http://argoscorp.net.br/api/incidentes');


        dd($request->statusCode);
        
        // $publicacoes = json_decode($request->getBody()->getContents())->data->publicacao;
        
        // $paginate = 5;
        // $page = Input::get('page', 1);

    
        // $offSet = ($page * $paginate) - $paginate;  
        // $itemsForCurrentPage = array_slice($publicacoes, $offSet, $paginate, false);  
        // $publicacoes = new \Illuminate\Pagination\LengthAwarePaginator($itemsForCurrentPage, count($publicacoes), $paginate, $page);
        // $publicacoes->setPath('http://blog.com/publicacao');

                //$publicacoes = Publicacao::paginate(5);

        //return view('publicacao.index', compact('publicacoes'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('publicacao.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PublicacaoRequest $request)
    {

        $publicacao = new Publicacao([
            'titulo' => $request->get('titulo'),
            'descricao'=> $request->get('descricao'),
        ]);
        $publicacao->save();
        
        return redirect()->route('publicacao.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       $p = Publicacao::find($id);

       return view('publicacao.edit', compact('p'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PublicacaoRequest $request, $id)
    {
        $p = Publicacao::find($id);
        $p->titulo = $request->get('titulo');
        $p->descricao = $request->get('descricao');
        $p->save();
        return redirect('/publicacao')->with('success', 'Atualizada com sucesso');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $publicacao = Publicacao::findOrFail($id);
        $publicacao->delete();
        return redirect('/publicacao')->with('success', 'Publicação removida com sucesso');
    }
}