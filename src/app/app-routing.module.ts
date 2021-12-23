import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaContactoComponent } from './components/alta-contacto/alta-contacto.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';

const routes: Routes = [
  {path:'registro', component:AltaContactoComponent},
  {path:'lista', component:ListaContactosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
