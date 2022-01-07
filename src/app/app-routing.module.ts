import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path:'', component:RegistroComponent},
  {path:'lista', component:ListaContactosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
