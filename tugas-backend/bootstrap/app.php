<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        
        // INI ADALAH SATU-SATUNYA BARIS YANG KITA PERLUKAN
        // untuk memberi tahu Laravel agar "mempercayai" cookie dari frontend
        $middleware->statefulApi(); 

        // (Biarkan alias ini jika ada)
        $middleware->alias([
            'verified' => \App\Http\Middleware\EnsureEmailIsVerified::class,
        ]);

    })
    ->withExceptions(function (Exceptions $exceptions) {
        // Bagian ini penting dan tidak boleh dihapus
    })->create();