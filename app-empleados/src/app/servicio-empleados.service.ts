import { Injectable } from '@angular/core';


//INYECTAR EL SERVICIO
@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  muestraMensaje(mensaje: string) {
    alert(mensaje);
  }
}
