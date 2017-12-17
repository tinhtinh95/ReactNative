<?php
$arrayName = array(
  new CaSi(0,"Dam Vinh Hung", "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
  new CaSi(1,"My Tam","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
  new CaSi(2,"Ho Ngoc Ha", "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
  new CaSi(3,"Minh Hang","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
  new CaSi(4,"Dam Vinh Hung", "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
  new CaSi(5,"My Tam","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
  new CaSi(6,"Ho Ngoc Ha", "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
  new CaSi(7,"Minh Hang","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
  new CaSi(8,"Dam Vinh Hung", "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
  new CaSi(9,"My Tam","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
  new CaSi(10,"Ho Ngoc Ha", "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
  new CaSi(11,"Minh Hang","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
  new CaSi(12,"Dam Vinh Hung", "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
  new CaSi(13,"My Tam","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
  new CaSi(14,"Ho Ngoc Ha", "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
  new CaSi(15,"Minh Hang","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
  new CaSi(16,"Dam Vinh Hung", "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
  new CaSi(17,"My Tam","https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/1506895_1405465016359497_522213303_n.jpg?oh=066c4cfe45d5fb14bdc0880a4e0faf57&oe=5ACD2264"),
);



$soItem1trang=3;
$page=$_GET['trang'];
$from=$page* $soItem1trang;


$mangmoi=array();
for($i=$from; $i<=$from+2; $i++){
  array_push($mangmoi, $arrayName[$i]);
}

echo json_encode($mangmoi);
/**
 *
 */
class CaSi
{
  public $id;
  public $Ten;
  public $Hinh;
  function CaSi ($i,$t,$h){
    $this->id=$i;
    $this->Ten=$t;
    $this->Hinh=$h;
  }
}


 ?>
