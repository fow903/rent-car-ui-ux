import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcaComponent } from './marca/marca.component';
import { ModeloComponent } from './modelo/modelo.component';
import { CombustibleComponent } from './combustible/combustible.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { InspeccionComponent } from './inspeccion/inspeccion.component';
import { RentaComponent } from './renta/renta.component';
import { TipovehiculoComponent } from './tipovehiculo/tipovehiculo.component';

const appRoutes: Routes = [
  { path: 'tipo-veh', component: TipovehiculoComponent },
  { path: 'marca', component: MarcaComponent },
  // { path: 'home', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MarcaComponent,
    ModeloComponent,
    CombustibleComponent,
    VehiculoComponent,
    ClienteComponent,
    EmpleadoComponent,
    InspeccionComponent,
    RentaComponent,
    TipovehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
