<?php
    $content = '';
    foreach ($_POST as $key => $value) {
        if($value){
            $content .= "<b>$key</b>: <i>$value</i>\n";
            }
    }
    if(trim($content)){
        $content = "<b>Message from Site:</b>\n".$content;
        // Your bot's token that got from @BotFather
        $apiToken = "6908777816:AAG-R9ZgwFnby3J6WR1yzbeom_vox4PMSkQ";
        $data = [
        // The user's (that you want to send a message) telegram chat id
        'chat_id' => '@email_bot_jadoo',
        'text' => $content,
        'parse_mode' => 'HTML'
        ];
        $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?".http_build_query($data));
    }
?>