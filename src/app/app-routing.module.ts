import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';


const routes: Routes = [
  { path: 'newSolicitud/:Propiedad', component: PrincipalComponent},
  { path: 'verSolicitud/:Tk', component: PrincipalComponent},
  { path: 'solicitudes', component: SolicitudesComponent},
  { path: 'solicitudes/:search', component: SolicitudesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'newSolicitud/CPX'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
