import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {
  cuadroNombre: string;
  cuadroApellido: string;
  cuadroCargo: string;
  cuadroSalario: number;


// lamar al router
  constructor(private router:Router, private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }
  empleados: Empleado[] = [];

// enrutamiento a home.
  volverHome(){
    // donde tiene que ir
    this.router.navigate([''])
    // this.router.navigate(['contacto'])
  }
  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre, 
      this.cuadroApellido, 
      this.cuadroCargo, 
      this.cuadroSalario
    );
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    //añadimos el router para poder redireccionar al agregar empleado
    this.router.navigate([''])
  }

}



