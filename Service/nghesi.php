<?php 
// phpinfo();
$arrNgheSi=array();
class NgheSi{
    public $id;
    public $ten;
    public $vaitro;
    public $hinhanh;

    function NgheSi($i, $t, $v, $h){
        $this->id=$i;
        $this->ten=$t;
        $this->vaitro=$v;
        $this->hinhanh=$h;
    }
}
$link=mysqli_connect("localhost","root","") or die("Khong the ket noi csdl");
mysqli_select_db($link,"websevice")  or die("fail");
 mysqli_set_charset($link,'utf8'); // không lỗi font chữ khi load từ database

$sql="select * from nghesi" ;
 $result=mysqli_query($link,$sql);


while($row=mysqli_fetch_array($result)){
    // $obj=new NgheSi($row["id"], $row["ten"], $row["vaitro"], $row["hinhanh"]);
    array_push($arrNgheSi,new NgheSi($row[0], $row["ten"], $row["vaitro"], $row["hinhanh"]));
}
// print_r($obj);

echo json_encode($arrNgheSi);
 
?>
