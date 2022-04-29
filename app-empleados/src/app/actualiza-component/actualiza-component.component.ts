import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {
  cuadroNombre: string;
  cuadroApellido: string;
  cuadroCargo: string;
  cuadroSalario: number;
  //declarar el indice. (PARA ACTUALIZAR)
  indice:number;

  //CREAMOS LA VARIABLE DE LA ACCION.
    accion:number;

  // llamar al router y activar el servicio activateRout (para poder usarlo en actualiza)
  constructor(private router:Router, private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService,private route:ActivatedRoute) { }

  ngOnInit(): void {

//GUARDAMOS EN ESTA VARIABLE EL VALOR QUE LE PASAMOS A ACTUALIZA A TRAVES DE LA URL.
this.accion=parseInt(this.route.snapshot.queryParams['accion']);

    this.empleados = this.empleadosService.empleados;
    // ALMACENAR EL INDICE QUE VIENE DE LA RUTA. (RESCATAMOS EL ID)
    this.indice=this.route.snapshot.params['id'];
// CONTRUYES UN OBJETO DE TIPO EMPLEADO QUE almacenas al empleado que tiene el id que tiene en this.indice.
//EL METODO SE CREA EN EL SERVICIO DEL EMPLEADO.
    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);

    // CARGAR EL EMPLEADO.

    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;

  }



  empleados: Empleado[] = [];

// enrutamiento a home.
  volverHome(){
    // donde tiene que ir
    this.router.navigate([''])
    // this.router.navigate(['contacto'])
  }

//   actualizaEmpleado() {
//     let miEmpleado = new Empleado(
//       this.cuadroNombre, 
//       this.cuadroApellido, 
//       this.cuadroCargo, 
//       this.cuadroSalario
//     );

//     //LLAMAR AL METODO ACTUALIZAR  Y LE PASAMOS EL INDICE Y EL EMPLEADO. 
//     //CREAR EL METODO QUE SE ENCARGA DE ACTUALIZAR LA INFORMACION. (EMPLEADOSSERVICE ES DONDE SE CREA EL METODO)
//     this.empleadosService.actualizarEmpleado(this.indice,miEmpleado);
//     //añadimos el router para poder redireccionar al agregar empleado
//     this.router.navigate([''])
//   }

// eliminarEmpleado(){

//   this.empleadosService.eliminarEmpleado(this.indice);

//   this.router.navigate([''])

// }



// QUIERO QUE SI PASO VALOR 1 ACTUALIZE Y SI PASO VALOR 2 ELIMINE.
  actualizaEmpleado() {


// çPREGUNTAR POR EL VALOR DE LA ACCION:
if(this.accion==1){
  let miEmpleado = new Empleado(
    this.cuadroNombre, 
    this.cuadroApellido, 
    this.cuadroCargo, 
    this.cuadroSalario
  );
    //LLAMAR AL METODO ACTUALIZAR  Y LE PASAMOS EL INDICE Y EL EMPLEADO. 
    //CREAR EL METODO QUE SE ENCARGA DE ACTUALIZAR LA INFORMACION. (EMPLEADOSSERVICE ES DONDE SE CREA EL METODO)
    this.empleadosService.actualizarEmpleado(this.indice,miEmpleado);
    this.router.navigate([''])
}else{
    //añadimos el router para poder redireccionar al agregar empleado

    this.empleadosService.eliminarEmpleado(this.indice);

    this.router.navigate([''])
  
      this.router.navigate([''])
}

}

}
