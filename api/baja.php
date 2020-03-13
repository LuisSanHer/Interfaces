<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
  
  require("conexion.php");
  $con=retornarConexion();
  
  mysqli_query($con,"delete from heroes where id=$_GET[id]");
    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'HEROE ELIMINADO';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>