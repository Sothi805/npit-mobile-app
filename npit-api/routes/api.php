<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\StudentController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::post('register', [AuthController::class, 'register'])->name("register");
Route::post('login', [AuthController::class, 'login'])->name("login");

Route::middleware("auth:api")->group(function () {
    Route::patch('/change-password/{id}', [AuthController::class, 'change_password']);

    //api/student/
    Route::get('student/{id}', [StudentController::class,'getById'])->name('student.show');
    Route::post('student/create', [StudentController::class,'create'])->name('student.create');
});
