<?php
if(isset($_POST['password'])){


$password = $_POST["password"];

if(strcmp($password, "Andreashofer56113") == 0){
  $countfiles = count($_FILES['fileupload']['name']);

  for($i=0;$i<$countfiles;$i++){
    $filename = $_FILES['fileupload']['name'][$i];
    move_uploaded_file($_FILES['fileupload']['tmp_name'][$i],'tmp/'.$filename);
  }
  echo("Erfolgreich");
}else{
  die("Falsches Passwort");
}

}
?>
