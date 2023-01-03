<?php

session_start();

// 데이터 가져오기
$pwd = $_POST["pwd"];
// echo $pwd;

//DB 연결
include "../../sub/inc/dbcon.php";

//쿼리 작성
$sql = "select idx, email, pwd from members where email = '$email';";
// echo $sql;
// exit;
//쿼리 전송
$send = mysqli_query($dbcon, $sql);

// select - DB에서 데이터 가져오기
$num = mysqli_num_rows($send);
// echo $num;
// exit;

if(!$num){
    echo "
    <script type='text/javascript'>
    alert('일치하는 이메일이 없습니다.');
    </script>";
} else{
    $array = mysqli_fetch_array($send);
    $login_pwd = $array["pwd"];

    if($pwd != $login_pwd){
        echo "
        <script type='text/javascript'>
        alert('비밀번호가 일치하지 않습니다.');
        </script>";
    } else{
        
        // 세션 변수 생성
        $_SESSION["login_idx"] = $array["idx"];
        $_SESSION["login_email"] = $array["email"];
        $_SESSION["login_pwd"] = $array["pwd"];

        // echo $_SESSION["login_idx"];
        // echo $_SESSION["login_email"];
        // echo $_SESSION["login_pwd"];
        // exit;
        echo "
        <script type='text/javascript'>
        alert('님 안녕하세요 :)');
        location.href = 'index.html';
        </script>";
        
        
    }; 
};

// DB 종료
mysqli_close($dbcon);

//리디랙션
// echo "
//     <script type='text/javascript'>
//     location.href='index.html';
//     </script>
// ";

?>