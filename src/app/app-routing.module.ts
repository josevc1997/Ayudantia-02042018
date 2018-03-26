import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntradasComponent } from './entradas/entradas.component';
import { IngresarEntradasComponent } from './ingresar-entradas/ingresar-entradas.component';
import { VerEntradaComponent } from './ver-entrada/ver-entrada.component';


const routes: Routes = [
    { path: '', component: EntradasComponent },
    { path: 'entradas/new', component: IngresarEntradasComponent },
    { path: ':page', component: VerEntradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
