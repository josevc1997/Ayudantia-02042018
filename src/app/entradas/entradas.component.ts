import { Component, OnInit } from '@angular/core';
import { EntradasService } from '../entradas.service';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

    entradasBlog: any = [];
  constructor(private entradasService: EntradasService) { }

  ngOnInit() {
    this.entradasService.getEntradas().subscribe(rows =>{
    this.entradasBlog = rows;
    console.log(this.entradasBlog);
});
  }

}
