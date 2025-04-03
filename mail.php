<?php
    $error = false;
    $name = $_POST['name']; 
    $email_address = $_POST['email']; 
    $message = $_POST['message'];

    if ((empty($name)) || (empty($email_address)) || (empty($message))) {
        $error = true;
    }

    if (!$error) {
        $to = "somogyim@somogyimasszazs.hu";
        $subject = "Üzeneted érkezett tőle: $name";

        $headers = "From: $email_address\r\n";
        $headers .= "Reply-To: $email_address\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $headers .= "Content-Transfer-Encoding: 8bit\r\n";

        $subject = "=?UTF-8?B?" . base64_encode($subject) . "?=";
        $message = mb_convert_encoding($message, "UTF-8", "auto");

        mail($to, $subject, $message, $headers);
    }
?>