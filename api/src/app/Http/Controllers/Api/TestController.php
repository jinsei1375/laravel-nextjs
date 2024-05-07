<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class TestController extends Controller
{
    public function index()
    {
        $data = User::all(); // データベースから全ての情報を取得
        return response()->json($data); // JSON形式でデータを返す
    }
}
