<?php
include './helpers.php';
function fetchUrl($url){

 $ch = curl_init();
 curl_setopt($ch, CURLOPT_URL, $url);
 curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
 curl_setopt($ch, CURLOPT_TIMEOUT, 20);
 // You may need to add the line below
 // curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);

 $feedData = curl_exec($ch);
 curl_close($ch);
 return $feedData;

}

//App Info, needed for Auth
$app_id = "119574632142993";
$app_secret = "b95b20da3e8a2650e8d1f27f6f87fca5";

//Retrieve auth token
$authToken = fetchUrl("https://graph.facebook.com/oauth/access_token?grant_type=client_credentials&client_id={$app_id}&client_secret={$app_secret}");
$feedarray = json_decode($authToken);
echo $authToken;


// fetch("https://graph.facebook.com/oauth/access_token?grant_type=client_credentials&client_id=119574632142993&client_secret=b95b20da3e8a2650e8d1f27f6f87fca5")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   })
// https://stackoverflow.com/questions/9373645/can-you-get-a-public-facebook-pages-feed-using-graph-api-without-asking-a-user
// https://stackoverflow.com/questions/17197970/facebook-permanent-page-access-token/43349492#43349492
