import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EntradasComponent } from './entradas/entradas.component';

import { HttpModule } from '@angular/http';
import { EntradasService } from './entradas.service';
import { NavbarComponent } from './navbar/navbar.component';
import { IngresarEntradasComponent } from './ingresar-entradas/ingresar-entradas.component';


@NgModule({
  declarations: [
    AppComponent,
    EntradasComponent,
    NavbarComponent,
    IngresarEntradasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [EntradasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
