<?php
$to      = 'jaw_pro@o2.pl';
$subject = $_POST['name'];
$message = $_POST['message'];
$headers = 'From:' . $_POST['email'] . "\r\n" .
    'Content-type: text/html; charset=utf-8';


mail($to, $subject, $message, $headers);
echo 'Mail został wysłany. Dziękujemy za kontakt';
?>
