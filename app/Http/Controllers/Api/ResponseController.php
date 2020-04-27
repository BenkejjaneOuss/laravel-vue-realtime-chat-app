<?php

namespace App\Http\Controllers\API;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller as Controller;
use Illuminate\Support\Facades\Auth;
use App\User;

class ResponseController extends Controller
{
    public function sendResponse($response)
    {
        $response['success'] = true;
        return response()->json($response, 200);
    }


    public function sendError($error)
    {
        return response()->json([
            'message' => 'Page Not Found. If error persists, contact info@website.com'],401);
    }
}
