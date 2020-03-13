<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php");
  $con=retornarConexion();
  

  mysqli_query($con,"insert into heroes(nombre,raza,descripcion,imagen) values
                  ('$params->nombre','$params->raza', '$params->descripcion','$params->imagen')");
    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'HEROE GUARDADO!';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>