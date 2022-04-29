import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponentComponent } from './error-personalizado-component/error-personalizado-component.component';

// CREAS LA CONSTANTE DONDE SE VAN GUARDAR LAS RUTAS.
// CREAR LAS RUTAS 
const appRoutes: Routes=[
  // CREAR OBJETO POR CADA RUTA
  {path: '', component: HomeComponentComponent},
  // URL PROYECTOS Y EN COMPONENTS EL COMPONENTE QUE QUEREMOS CARGAR
  {path: 'proyectos', component: ProyectosComponentComponent},
  {path: 'quienes', component: QuienesComponentComponent},
  {path: 'contacto', component: ContactoComponentComponent},
  // PREPARAR LA RUTA PARA QUE COJA EL PARAMETRO DEL INDICE
  {path: 'actualiza/:id', component: ActualizaComponentComponent},
  // CREAR PAGINA DE ERROR PERSONALIZADA ** (CUALQUIER COSA DIFERENTE A LO DE ARRIBA)
  {path: '**', component: ErrorPersonalizadoComponentComponent},
];

@NgModule({
  declarations: [
    //DECLARAR NUEVOS MODULOS
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    ErrorPersonalizadoComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // importar el router modul
    //forRoot para indicar que quiero utilizar esa constante para enrutar
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
