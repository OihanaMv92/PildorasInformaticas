import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';


// INYECTAR INFORMACION DESDE (PARA QUE UN SERVICIO HAGA TODO EL TRABAJO)
@Injectable({
  providedIn: 'root'
})


export class EmpleadosService {
  eliminaEmpleado: any;

  //INYECCION que nombre le damos al otro servicio que tenemos creado.
  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) {

   }

  empleados: Empleado[] = [
    new Empleado('Ricardo','Ruben','Presidente',600000),
    new Empleado('Pico','Monaco','Jefe',200000),
    new Empleado('Tata','Brown','Supervisor',160000),
    new Empleado('Ricky','Ricon','Empleado',120000),
  ];


  // METODO DE AGREGAR EMPLEADOS
  agregarEmpleadoServicio(empleado: Empleado) {
    this.empleados.push(empleado);
    // NOMBRE DEL CONSTRUCTOR y Mensaje mostrar
    this.servicioVentanaEmergente.muestraMensaje(
      `Se registró con exito el usuario: 
      ${empleado.nombre} ${empleado.apellido}
      con el cargo de ${empleado.cargo}`
    );

  }
// CREAR EL METODO 
  encontrarEmpleado(indice:number){
// buscame en este array la posicion.
    let empleado:Empleado=this.empleados[indice];
    return empleado;

  }

  // CREAR EL METODO DE ACTUALIZAR
  actualizarEmpleado(indice:number,empleado:Empleado){
    // ALMACENAS LA VARIABLE LA INFORMACION QUE HAY EN EL EMPLEADO INDICE
  let empleadoModificado= this.empleados[indice]

  // el nombre empleado tiene que guardarse en empleadomodificado.nombre
  empleadoModificado.nombre=empleado.nombre;
  empleadoModificado.apellido=empleado.apellido;
  empleadoModificado.cargo=empleado.cargo;
  empleadoModificado.salario=empleado.salario;

  }

  //CREAR SERVICIO ELIMINAR EMPLEADO

  eliminarEmpleado(indice:number){

    //ELIMINAR EMPLEADO.
    //APARTIR DEL INDICE ELIMINAME 1 EMPLEADO
    this.empleados.splice(indice,1);
  }

}
