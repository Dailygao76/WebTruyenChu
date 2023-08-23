<?php
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "database_login";

    $conn = new mysqli($host, $username, $password, $dbname);


    if($conn->connect_error){
        die();
        echo("Ket noi khong thanh cong: ".$conn->connect_error);
    }

    $username = $_POST['username'];
    $password = $_POST['password'];
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $gender = $_POST['gender'];
    $national = $_POST['national'];
    $note = $_POST['noteInput'];


    $sql = "INSERT INTO user (username, password, fullname, email, phone, gender, nationality, note)
            VALUES ('$username', '$password', '$fullname', '$email', '$phone', '$gender', '$national', '$note')";

    if ($conn->query($sql) === TRUE) {
        echo "Đăng ký thành công!";
        echo $username;
    } else {
        echo "Lỗi: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

?>