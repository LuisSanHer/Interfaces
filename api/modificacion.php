<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php");
  $con=retornarConexion();
  

  mysqli_query($con,"update heroes set nombre='$params->nombre',
                                          raza='$params->raza',
										  descripcion='$params->descripcion',
										  imagen='$params->imagen'
                                          where id='$params->id' ");
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'HEROE MODIFICADO';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>