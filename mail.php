<?php
    $error = false;
    $name = $_POST['name']; 
    $email_address = $_POST['email']; 
    $message = $_POST['message'];
    
    if((empty($name)) || (empty($email_address)) || (empty($message))) {
        $error = true;
    }

    if(!$error) {
        $to = "somogyim@somogyimasszazs.hu";
        $subject = "Üzeneted érkezett tőle: $name";
        $headers = "From: $email_address";

        mail($to,$subject,$message,$headers);
    }
?>