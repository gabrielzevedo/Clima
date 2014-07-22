<?php

//mail do destinatario
$destino = "gabrielx86@live.com";

//Assunto da mensagem
$subject = "Assunto do email";

// nome e email de quem está enviando (resgatando variáveis)
$nome = $_POST['nome'];
$email = $_POST['email'];
$campomensagem = $_POST['mensagem'];

//monta os headers
$headers  = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\n";
$headers .= "From: \"$nome\" <$email>\n";
$headers .= "X-Sender: {$destino}\n";
$headers .= "X-Mailer: PHP\n"; // mailer
$headers .= "X-Priority: 1\n"; // Urgent message!
$headers .= "Return-Path: $nome <$email>\n"; // Return path for errors

//manda o mail
mail($destino, $subject, $mensagem, $headers);
echo "O formulário foi preenchido e enviado com sucesso!!";

?>
