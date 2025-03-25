<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'name',
        'gender',
        'dob',
        'phone_number',
        'enrollment_date',
        'status',
    ];
}
