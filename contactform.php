<?php

if(isset($_POST['submit'])){
    
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "eduardgip85@gmail.com";
    $header = "From: " . $mailFrom;
    $txt = "Has recibido un mail de " . $name . ".\n\n" . $message;

    mail($mailTo,$subject,$txt,$header);

    header("Location: index.html?mailsend");
    
}

?>