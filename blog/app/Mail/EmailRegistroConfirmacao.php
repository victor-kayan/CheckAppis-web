<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class EmailRegistroConfirmacao extends Mailable
{
    use Queueable, SerializesModels;
    public $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $link = url('/api/auth/registro/ativar/' . $this->user->id . '/' . $this->user->token);
        return $this->from('argoscorp.net@gmail.com')->view('emails.registroConfirmacao')->with([
            'nome' => $this->user->name,
            'email' => $this->user->email,
            'link' => $link,
            'token' => $this->user->token,
        ])->subject('Bem vindo ao ArgosCorp');
    }
}
