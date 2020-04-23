<?php

if(isset($_POST['submit'])){
    
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "eduardgip85@gmail.com";
    $header = "From: " . $mailFrom;
    $txt = "Has recibido un mail de " . $name . ".\n\n" . $message;

    if(mail($mailTo,$subject,$txt,$header)){
        echo 'Your mail has been sent successfully.';
    } else{
        echo 'Unable to send email. Please try again.';
    }

    header("Location: index.html?mailsend");
    
}

?>