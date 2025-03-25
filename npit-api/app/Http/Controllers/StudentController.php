<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Student;

class StudentController extends Controller
{
    public function create(Request $request){
        $validator = Validator::make($request->all(), [
            "name"=> "required",
            "gender"=> "required",
            "dob"=> "required|date",
            "phone_number"=> "required",
            "enrollment_date" => "required|date",
        ]);

        if ($validator->fails()){
            return response()->json([
                "status" => "error",
                "message"=> "failed to create student",
                "errors"=> $validator->errors()->all()
            ]);
        }

        $student = Student::create([
            "name"=> $request->name,
            "gender"=> $request->gender,
            "dob"=> $request->dob,
            "phone_number"=> $request->phone_number,
            "enrollment_date"=> $request->enrollment_date
        ]);

        return response()->json([
            "status"=> "success",
            "message"=> "student created successfully",
            "data"=> $student
        ]);
    }

    public function getById($id){
        $student = Student::findOrFail($id);
        if(!$student){
            return response()->json([
                "status"=> "error",
                "message"=> "failed to fetch student",
                "data"=> null
            ]);
        }
        return response()->json([
            "status"=> "success",
            "message"=> "successfully fetched student",
            "data" => $student
        ]);
    }
    public function getAll(){
        $student = Student::get();
        if(!$student){
            return response()->json([
                "status"=> "error",
                "message"=> "failed to fetch student",
                "data"=> null
            ]);
        }
        return response()->json([
            "status"=> "success",
            "message"=> "successfully fetched student",
            "data" => $student
        ]);
    }
}
