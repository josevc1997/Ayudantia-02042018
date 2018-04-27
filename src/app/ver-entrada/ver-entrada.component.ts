import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

import { EntradasService } from '../entradas.service';



@Component({
  selector: 'app-ver-entrada',
  templateUrl: './ver-entrada.component.html',
  styleUrls: ['./ver-entrada.component.css']
})
export class VerEntradaComponent implements OnInit {

  entrada: any = [];
  post: any = [];

  constructor(private entradasService: EntradasService,
              private _router: Router,
              private _route: ActivatedRoute,
              private location: Location
             ) { }

  ngOnInit() {
      this.entrada = +this._route.snapshot.paramMap.get('page');
      // this._route.params.forEach((params: Params) =>{
      //     this.entrada = params['page'];
      // })
      this.entradasService.getEntrada(this.entrada).subscribe(rows =>{
          this.post = rows[0];
          console.log(this.post);
  });
  }

  goBack(): void {
      // this.location.back();
      this._router.navigate(['']);
  }
  eliminar(){
      this.entradasService.eliminar(this.post.identrada).subscribe(rows =>{
          this.post = rows;
          if(this.post=='1'){
              window.alert("Entrada Eliminada Correctamente");
              this._router.navigate(['']);

          }
          else if(this.post=='0'){
               window.alert("Entrada no pudo ser Eliminada");
           }
          console.log(this.post);
  });
  }

}
