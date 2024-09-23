<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Verificar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener y validar los datos del formulario
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $establecimiento = isset($_POST['establecimiento']) ? trim($_POST['establecimiento']) : '';
    $number = isset($_POST['number']) ? trim($_POST['number']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    $asunto = isset($_POST['asunto']) ? trim($_POST['asunto']) : '';

    // Verificar si todos los campos necesarios están presentes
    if (empty($name) || empty($establecimiento) || empty($number) || empty($email) || empty($message) || empty($asunto)) {
        echo "Por favor, complete todos los campos del formulario.";
        exit;
    }

    // Validar el formato del correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "El correo electrónico no es válido.";
        exit;
    }

    // Configurar los parámetros del correo
    $from = "test@hostinger-tutorials.com";
    $to = "lucianobvx@gmail.com";
    $subject = "Asunto: " . $asunto;
    $messageContent = "Nombre: " . $name . "\nNombre del establecimiento: " . $establecimiento . "\nTeléfono: " . $number . "\nCorreo: " . $email . "\nMensaje: " . $message;
    $headers = "From: " . "envaplastic@formularios.com";

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
