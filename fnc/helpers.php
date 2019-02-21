<?php
function consoleLog ($message) {
  $value = $message;
  if ( is_array( $value ) )
      $value = implode( ',', $value);
  echo "
  <script  type='text/javascript'>
    console.log( 'PHP-LOG:".$value."');
  </script>";
}

function checkType($type, $string) {
  return strpos($type, $string) !== false;
}

function checkVar(&$var) {
  return isset($var) ? $var : false;
}

function checkSubMenu($item, $activeTrigger) {
  if(!isset($item['sub-menu']) || !$activeTrigger) return false;

  foreach ($item['sub-menu'] as $trigger => $subItem) {
    if($trigger === $activeTrigger) return true;
  }
}

function getPrevKey($key, $hash = array()) {
  $keys = array_keys($hash);
  $found_index = array_search($key, $keys);
  $length = count($keys) - 1;
  if ($found_index === 0)
    return $keys[$length];
  return $keys[$found_index-1];
}

function getNextKey($key, $hash = array()) {
  $keys = array_keys($hash);
  $found_index = array_search($key, $keys);
  $length = count($keys) - 1;
  if ($found_index === $length)
    return $keys[0];
  return $keys[$found_index + 1];
}


function cutString($s = '',$max_length = 140) {
  if (strlen($s) > $max_length) {
    $offset = ($max_length - 3) - strlen($s);
    $s = substr($s, 0, strrpos($s, ' ', $offset)) . '...';
	}
 return $s;
}
?>
