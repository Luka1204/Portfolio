<?php
if(isset($_POST)){
    if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['subject']) && !empty($_POST['message']) ){
        $emailD = "lukareyes04@gmail.com";

        $name = $_POST['name'];
        $emailR = $_POST['email'];
        $titulo = $_POST['subject'];
        $mensaje = $_POST['message'];
        $header = "From: noreply@example.com" . "\r\n";
        $header .= "Reply-To ".$emailR. "\r\n";
        $mail = mail($emailD, $titulo, $mensaje, $header);
    }
}