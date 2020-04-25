<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
  $_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
}

$videospider_tv = file_get_contents('https://vsrequest.video/request.php?key=JhhbVDPq3GIdkhuE&secret_key=a10ro5sbabnvycg0dfn1dn1h7h26bn&video_id='.$_GET["tvid"].'&tmdb=1&tv=1&s='.$_GET["season"].'&ip='.$_SERVER["REMOTE_ADDR"]);
                                     

$videospider_movie = file_get_contents('https://vsrequest.video/request.php?key=JhhbVDPq3GIdkhuE&secret_key=a10ro5sbabnvycg0dfn1dn1h7h26bn&video_id='.$_GET["movid"].'&tmdb=1&ip='.$_SERVER["REMOTE_ADDR"]);

echo json_encode(array(
    "ticket_tv" => $videospider_tv,
    "ticket_movie" => $videospider_movie,
));

?>