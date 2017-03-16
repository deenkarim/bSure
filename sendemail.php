<?
     $name = $_GET['name'] ;
     $subject = $_GET['subject'] ;
      $email = $_GET['email'] ;
      $message = $_GET['message'] ;
   mail( "deen.karim@gmail.com",$subject ,$name,  $email );
      print "sent";
      echo "blablablabla";
?>
