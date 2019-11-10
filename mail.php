<?php
if($_POST){
  $name = $_POST['name'];
  $tel = $_POST['tel'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $verif = $_POST['verif'];
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
  $headers .= "From: $name <$email>\r\nReply-to : $name <$email>\nX-Mailer:PHP";
  $subject="Une demande de contact a été effectué depuis votre site";
  $destinataire="jasonguestin@gmail.com";
  $body="$message";
  if(mail($destinataire,$subject,$body,$headers)) {
    $response['status'] = 'success';
    $response['msg'] = 'Votre mail a été envoyé';
  } else {
    $response['status'] = 'error';
    $response['msg'] = 'Echec de l\'envoi';
  }
  echo json_encode($response);
}
?>