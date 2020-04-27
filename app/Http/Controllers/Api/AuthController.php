<?php

namespace App\Http\Controllers\API;


use Illuminate\Http\Request;
use App\Http\Controllers\API\ResponseController as ResponseController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\User;
use Validator;

class AuthController extends ResponseController
{
    //create user
    public function signup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|',
            'email' => 'required|string|email|unique:users',
            'password' => 'required',
            'confirm_password' => 'required|same:password'
        ]);

        if($validator->fails()){
            $error['msg'] = $validator->errors()->first();
            return $this->sendError($error);       
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        if($user){
            $user->sendEmailVerificationNotification();
            $success['token'] =  $user->createToken('token')->accessToken;
            $success['msg'] = "Registration successfull..";
            return $this->sendResponse($success);
        }
        else{
            $error['msg'] = "Sorry! Registration is not successfull.";
            return $this->sendError($error); 
        }
        
    }
    
    //login
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required'
        ]);

        if($validator->fails()){
            $error['msg'] = $validator->errors()->first();
            return $this->sendError($error);          
        }

        $credentials = request(['email', 'password']);
        if(!Auth::attempt($credentials)){
            $error['msg'] = "Account not found";
            return $this->sendError($error);
        }
        $user = $request->user();
        $success['token'] =  $user->createToken('token')->accessToken;
        return $this->sendResponse($success);
    }

    //logout
    public function logout(Request $request)
    {
        
        $isUser = $request->user()->token()->revoke();
        if($isUser){
            $success['msg'] = "Successfully logged out.";
            return $this->sendResponse($success);
        }
        else{
            $error['msg'] = "Something went wrong.";
            return $this->sendResponse($error);
        }
            
        
    }

    //getuser
    public function getUser(Request $request)
    {
        //$id = $request->user()->id;
        $user = $request->user();
        if($user){
            return $this->sendResponse($user);
        }
        else{
            $error = "user not found";
            return $this->sendResponse($error);
        }
    }

    //getusers
    public function getUsers(Request $request)
    {
        //$id = $request->user()->id;
        $users = User::all();
        if($users){
            return $this->sendResponse($users);
        }
        else{
            $error = "user not found";
            return $this->sendResponse($error);
        }
    }
}