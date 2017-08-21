<?php

    $name = $_POST['name'];
    $telephone = $_POST['telephone'];
    $street = $_POST['street'];
    $house = $_POST['house'];
    $build = $_POST['build'];
    $apartment = $_POST['apartment'];
    $floor = $_POST['floor'];
    $comment = $_POST['comment'];
    $money = $_POST['money'];

    $recall = $_POST['recall']; // 1 или null 
    $recall = isset($recall) ? 'НЕТ' : 'ДА'; 

    // $mail_message = '
    // <html>
    //     <head>
    //         <title>Заявка</title>
    //     </head>
    //     <body>
    //         <h2>Заказ</h2>
    //         <ul>
    //             <li>Имя: ' . $name . '</li>
    //             <li>Email: ' . $email . '</li>
    //             <li>Способ оплаты: ' . $pay . '</li>
    //             <li>Комментарии к заказу: ' . $message . '</li>
    //             <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
    //         </ul>
    //     </body>
    // </html>    
    // ';

    // $headers = "From: Администратор сайта <admin@loftschool.com>\r\n".
    // "MIME-Version: 1.0" . "\r\n" .
    // "Content-type: text/html; charset=UTF-8" . "\r\n";

    // $mail = mail('alexeys1987@gmail.com', 'Заказ', $mail_message, $headers);

    // $data = [];

    // if ($mail) {
    //     $data['status'] = "OK";
    //     $data['mes'] = "Письмо успешно отправлено";
    // }else{
    //     $data['status'] = "NO";
    //     $data['mes'] = "На сервере произошла ошибка";
    // }
    
    
    $data['nameAnswer'] = $name;
    if ($money == "yes") {
        $data['moneyAnswer'] = "Спасибо за оплату наличными.";
    }else{
        $data['moneyAnswer'] = "Спасибо за оплату картой.";
    }
    $data['mesAnswer'] = "Письмо отправлено :)";

    echo json_encode($data);

?>