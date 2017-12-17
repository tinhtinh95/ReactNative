<?php 

 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');

 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);

 $a=$obj["firstParam"];
 $b=$obj["secondParam"];
 $c=$a+$b;

$kq=8;

?>
{"kq":"<?=$c ?>"}