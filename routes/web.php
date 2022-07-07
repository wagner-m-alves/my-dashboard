<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Site\SiteController;
use App\Http\Controllers\Usr\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

# Site
Route::get('/', [SiteController::class, 'welcome'])->name('site.welcome');


# Authentication
require __DIR__.'/auth.php';


# Usr
Route::group(['middleware' => ['auth', 'verified']], function () {
    # Dashboard
    Route::get('/dashboard', [HomeController::class, 'index'])->name('dashboard');
});

