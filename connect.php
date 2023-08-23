<?php
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "database_login";

    $conn = new mysqli($host, $username, $password, $dbname);


    if($conn->connect_error){
        die();
        echo("Kết nối không thành công: ".$conn->connect_error);
    }

    // $current_url = $_SERVER['REQUEST_URI'];
    // echo "URL hiện tại: $current_url";


    $username = $_POST['username'];
    $password = $_POST['password'];
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $gender = $_POST['gender'];
    $hobby = implode(",", $_POST['hobby']);
    $national = $_POST['national'];
    $note = $_POST['comment'];
    
    $sql = "INSERT INTO `user` (`username`, `password`, `fullname`, `phone`, `email`, `gender`, `hobby`, `nationality`, `note`)
            VALUES ('$username', md5('$password'), '$fullname', '$phone', '$email', '$gender', '$hobby', '$national', '$note')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Đăng ký thành công!"."<br>";
        echo "Tài khoản: ".$username."<br>";;
    } else {
        echo "Lỗi: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();


?>