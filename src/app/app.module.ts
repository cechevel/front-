import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';
import { InicioComponent } from './principal/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './shared/nav/nav.component';
import { CrearMateriaComponent } from './principal/crear-materia/crear-materia.component';
import { CrearPeriodoComponent } from './principal/crear-periodo/crear-periodo.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    RegistrarComponent,
    InicioComponent,
    NavComponent,
    CrearMateriaComponent,
    CrearPeriodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
