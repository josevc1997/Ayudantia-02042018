import { Component, OnInit } from '@angular/core';
import { EntradasService } from '../entradas.service';

@Component({
  selector: 'app-ingresar-entradas',
  templateUrl: './ingresar-entradas.component.html',
  styleUrls: ['./ingresar-entradas.component.css']
})
export class IngresarEntradasComponent implements OnInit {

  titulo:"";
  contenido:"";

  constructor(private entradasService: EntradasService) { }

  ngOnInit() {
  }

  crearEntrada(){
    this.entradasService.insertEntrada(
        {"titulo": this.titulo,
        "contenido": this.contenido}).subscribe(res=>{
          window.alert("Entrada Ingresada Correctamente");
      });
  }

}
