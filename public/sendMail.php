<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Verificar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = isset($_POST['nombre']) ? trim($_POST['nombre']) : '';
    $numeroContacto = isset($_POST['numeroContacto']) ? trim($_POST['numeroContacto']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';

    // Validaciones (agrega aquí tus validaciones como antes)

    // Configurar los parámetros del correo
    $from = "test@hostinger-tutorials.com";
    $to = "lucianobvx@gmail.com";
    $subject = "FORMULARIO WEB";

    // Contenido del correo en HTML
    $messageContent = "
    <html>
    <head>
        <title>Nueva consulta desde formulario web</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
            }
            .container {
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                padding: 20px;
                max-width: 600px;
                margin: auto;
            }
            h1 {
                color: #333;
            }
            p {
                line-height: 1.6;
                color: #555;
            }
            .footer {
                margin-top: 20px;
                font-size: 0.9em;
                color: #777;
            }
        </style>
    </head>
    <body>
        <div class='container'>
            <h1>Nueva Consulta de Formulario</h1>
            <p><strong>Nombre:</strong> $nombre</p>
            <p><strong>Número de Contacto:</strong> $numeroContacto</p>
            <p><strong>Correo Electrónico:</strong> $email</p>
            <p><strong>Mensaje:</strong></p>
            <p>$message</p>
            <div class='footer'>
                <p>Este es un mensaje automático, por favor no responder.</p>
            </div>
        </div>
    </body>
    </html>
    ";

    // Cabeceras del correo
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$from>" . "\r\n";

    // Intentar enviar el correo
    if (mail($to, $subject, $messageContent, $headers)) {
        echo "El mensaje de correo electrónico ha sido enviado.";
    } else {
        echo "Hubo un problema al enviar el mensaje.";
    }
} else {
    echo "El formulario no se ha enviado.";
}
?>
