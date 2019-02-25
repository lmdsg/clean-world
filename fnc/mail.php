<?php
  error_reporting(0);

  use PHPMailer\PHPMailer\PHPMailer;
  include_once "PHPMailer/PHPMailer.php";
  include_once "PHPMailer/Exception.php";
  if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) && isset($_POST['location'])) {
    $loc = $_POST['location'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mail = new PHPMailer();

    $mail->addAddress('markus.maelzer@gmail.com');
    // $mail->addAddress($sendTo[$loc]);
    $mail->setFrom($email, $vorname.' '.$nachname);
    $mail->Subject = 'carlovers.at Internetanfrage ';
    $mail->isHTML(true);
    $mail->Body = 'Von: '.$name.'<br>'.'Email: '.$email.'<br>'.nl2br($message);

    if($mail->send()) {
      echo 'Die Nachricht wurde erfolgreich versandt';
    } else {
      header('HTTP/1.1 500 Internal Server Booboo');
      echo 'Please Fill out all fields!';
    }
  } else {
    header('HTTP/1.1 500 Internal Server Booboo');
    echo 'Please Fill out all fields!';
  }
?>
