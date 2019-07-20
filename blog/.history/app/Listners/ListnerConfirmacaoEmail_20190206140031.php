<?php

namespace App\Listners;

use App\Events\Event\NovoRegistro;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Mail\EmailRegistroConfirmacao;
use Illuminate\Support\Facades\Mail

class ListnerConfirmacaoEmail
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  NovoRegistro  $event
     * @return void
     */
    public function handle(NovoRegistro $event)
    {
        Mail::to($event->user);
         ->send(new App\Mail\EmailRegistroConfirmacao)
    }
}
