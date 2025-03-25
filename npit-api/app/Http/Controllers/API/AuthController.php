<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => "required",
            "email" => "required|email|unique:users,email",
            "password" => "required|min:8",
            "role" => "required",
            "confirm_password" => "required|same:password",
        ]);

        if ($validator->fails()) {
            return response()->json([
                "status" => "error",
                "message" => "Validation failed",
                "data" => $validator->errors()->all()
            ]);
        }

        $hashedPassword = bcrypt($request->password);

        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => $hashedPassword,
            "role" => $request->role,
            "status" => "active",
        ]);

        $token = $user->createToken("npit")->accessToken;

        return response()->json([
            "status" => "success",
            "message" => "User created successfully",
            "data" => [
                "name" => $user->name,
                "email" => $user->email,
                "role" => $user->role,
                "status" => $user->status,
                "password" => $hashedPassword, // Keeping password visible for dev
                "token" => $token
            ]
        ]);
    }

    public function login(Request $request)
    {
        if (Auth::attempt(["email" => $request->email, "password" => $request->password])) {
            $user = Auth::user();
            $token = $user->createToken("npit")->accessToken;

            return response()->json([
                "status" => "success",
                "message" => "Login successful",
                "data" => [
                    "name" => $user->name,
                    "email" => $user->email,
                    "role" => $user->role,
                    "status" => $user->status,
                    "password" => $user->password, // Keeping visible for dev
                    "token" => $token
                ]
            ]);
        }

        return response()->json([
            "status" => "failed",
            "message" => "Invalid credentials",
            "data" => null
        ]);
    }

    public function change_password(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "old_password" => "required",
            "new_password" => "required|min:8",
            "confirm_password" => "required|same:new_password",
        ]);

        if ($validator->fails()) {
            return response()->json([
                "status" => "error",
                "message" => "Validation failed",
                "data" => $validator->errors()->all()
            ]);
        }

        $user = Auth::user();

        if (!Hash::check($request->old_password, $user->password)) {
            return response()->json([
                "status" => "failed",
                "message" => "Old password is incorrect",
                "data" => null
            ]);
        }

        $hashedNewPassword = bcrypt($request->new_password);
        $user->password = $hashedNewPassword;
        $user->save();

        return response()->json([
            "status" => "success",
            "message" => "Password changed successfully",
            "data" => [
                "email" => $user->email,
                "new_password" => $hashedNewPassword // Keeping visible for dev
            ]
        ]);
    }

    public function delete_account(Request $request)
    {
        $user = Auth::user();
        $user->status = "in-active";
        $user->save();

        return response()->json([
            "status" => "success",
            "message" => "Account deactivated successfully",
            "data" => [
                "email" => $user->email,
                "status" => $user->status
            ]
        ]);
    }
}
