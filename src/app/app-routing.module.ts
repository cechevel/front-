import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './principal/inicio/inicio.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';

const routes: Routes = [
  {
    path:'',
    component:EntrarComponent
  },
  {
    path:'registrar',
    component:RegistrarComponent
  },
  {
    path:'**',
    redirectTo: ''
  },
  {
    path:'inicio',
    component:InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
