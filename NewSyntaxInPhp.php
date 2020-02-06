<?php
    //Establish Your Connection Errors
    $conn = new mysqli('localhost','root','','myblog');
    if($conn->connect_error){
        echo "You are not Connected ".$conn->connect_error;
    }

    $stmt = $conn->prepare("INSERT INTO signup(firstname,lastname,password,email)
    VALUES(?,?,?,?) ");
    $stmt->bind_param("ssss",$firstname,$lastname,$pass,$email);
    
    $firstname = "John";
    $lastname = "Doe";
    $pass = "sola123";
    $email = "john@example.com";
    //$stmt->execute();

    $firstname = "Mary";
    $lastname = "Jane";
    $pass = "mary123";
    $email = "mary@example.com";
    //$stmt->execute();

    $firstname = "Ghana";
    $lastname = "Dowen";
    $pass = "123sola";
    $email = "ghana@example.com";
    //$stmt->execute();

    //echo "New records created successfully";

    $stmt->close();
    $conn->close();
?>

<form action="" method="post">
    <?php
    if(isset($_POST['submit']))
    ?>
    First Name:<input type="text" name="firstname" id=""><br>
    Last Name:<input type="text" name="lastname" id=""><br>
    Password: <input type="password" name="password" id=""><br>
    Email <input type="email" name="email" id=""><br>
    <input type="submit" value="Submit" name="submit">
</form>
