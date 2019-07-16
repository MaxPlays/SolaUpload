<?php
if(isset($_POST['name'])){


$name = $_POST["name"];

 $countfiles = count($_FILES['fileupload']['name']);

 for($i=0;$i<$countfiles;$i++){
  $filename = $_FILES['fileupload']['name'][$i];
  move_uploaded_file($_FILES['fileupload']['tmp_name'][$i],'tmp/'.$filename);

 }
}
?>
