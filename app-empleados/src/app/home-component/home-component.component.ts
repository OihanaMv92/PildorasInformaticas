import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})

// ir pegando los datos del app.ts
export class HomeComponentComponent implements OnInit {

  constructor(
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService
  ) { }
  
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  empleados: Empleado[] = [];


  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre, 
      this.cuadroApellido, 
      this.cuadroCargo, 
      this.cuadroSalario
    );
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);

  }

}
