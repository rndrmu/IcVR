## The following code is the JS used to get the tickets required by videospider.in

<code>
$.getJSON("https://api.ipify.org/?format=json", function (response) {
var clientIP = response.ip;
   // alert("Your IP is: "+clientIP);
var proxy = 'https://cors-anywhere.herokuapp.com/';
$.get("https://videospider.in/getticket.php?key=[REDACTED]&secret_key=[REDACTED]&video_id="+window.idtv+"&tmbd=1&s="+window.season+"&ip="+clientIP+"", function( data ) {
</code>
