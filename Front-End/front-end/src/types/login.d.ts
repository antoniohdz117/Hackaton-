export interface Login {

  rfc: string;
  contraseña: String;
}

// Respuesta esperada del servidor al iniciar sesión
export interface LoginResponse {
  
  //token: string; Todavía no se implementa o no se necesita
  idusuario: number,
  nombre: string,
  paterno:string,
  materno:string,
  numerofijo:string,
  numerocelular:string,
  correo: string,
  idrol:number
}