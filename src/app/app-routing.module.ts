import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { CrearMateriaComponent } from './principal/crear-materia/crear-materia.component';
import { CrearPeriodoComponent } from './principal/crear-periodo/crear-periodo.component';
import { InicioComponent } from './principal/inicio/inicio.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';

const routes: Routes = [
  {
    path:'',
    component:EntrarComponent
  },
  {
    path:'inicio',
    component: InicioComponent,
    canActivate: [ValidarTokenGuard],
    canLoad:[ValidarTokenGuard]
  },
  {
    path:'registrar',
    component:RegistrarComponent
  },

  {
    path:'crear-curso',
    component: CrearMateriaComponent,
    canActivate: [ValidarTokenGuard],
    canLoad:[ValidarTokenGuard]
  },
  {
    path:'crear-periodo',
    component: CrearPeriodoComponent,
    canActivate: [ValidarTokenGuard],
    canLoad:[ValidarTokenGuard]
  },
  {
    path:'**',
    redirectTo: ''
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
