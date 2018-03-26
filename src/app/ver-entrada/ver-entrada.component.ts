import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

import { EntradasService } from '../entradas.service';



@Component({
  selector: 'app-ver-entrada',
  templateUrl: './ver-entrada.component.html',
  styleUrls: ['./ver-entrada.component.css']
})
export class VerEntradaComponent implements OnInit {

  entrada: any = [];
  post: any;

  constructor(private entradasService: EntradasService,
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
      this.location.back();
  }

}
