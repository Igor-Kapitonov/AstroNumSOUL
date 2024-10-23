<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $birthdate = $_POST['birthdate'];
    $email = $_POST['email'];

    // Формирование письма
    $to = 'kizero182@gmail.com'; // Кому отправляем
    $subject = 'Рассчитанная Матрица Судьбы';
    $message = "Дата рождения: $birthdate\nE-mail: $email\nРассчитанная матрица: ...";
     // Вставь сюда результат расчета
    $headers = "From: $email";

    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        echo "Письмо успешно отправлено!";
    } else {
        echo "Ошибка при отправке письма.";
    }
}
?>
