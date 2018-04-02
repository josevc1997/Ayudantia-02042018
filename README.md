# Incorporando rutas y parametros
Primero modificamos el html que contiene las entradas de para que el titulo sea un enlace que nos redirija una entrada en especifico.
De esta manera el archivo que debera ser modificado corresponde a "/blogApp/src/app/entradas/entradas.component.html" quedando de la siguiente manera:

```
<div class="row">
    <div class="col-12 col-md-6" *ngFor="let entrada of entradasBlog">
        <div class="card mt-3">
            <div class="card-header">
                <a routerLink="{{ entrada.identrada }}">
                    <h1> {{ entrada.titulo }} </h1>
                </a>
            </div>
            <div class="card-body">
                <p> {{ entrada.contenido }} <p>
            </div>
            <div class="card-footer">
                <h4> {{ entrada.fechaPublicacion | date:'hh:mm dd/MM/yyyy'}} </h4>
            </div>
        </div>
    </div>
</div>
```

Ahora que hemos modificado el titulo para que nos redirija a una entrada especifica debemos crear el componente que mostrara la entrada requerida.
```
ng generate component verEntrada
```
Una vez creado el componente debemos modificar el archivo "/blogApp/src/app/app-routing.module.ts"  para importar el componente e incorporar las rutas:
1. Importamos el componente en el head
```
import { VerEntradaComponent } from './ver-entrada/ver-entrada.component';
```
2. Agregamos la ruta en const routes: Routes = [ ... ];
```
{ path: ':page', component: VerEntradaComponent }
```

Para trabajar con los parametros de la ruta debemos hacer lo siguiente en “/blogApp/src/app/ver-entrada/ver-entrada.component.ts”:
1. Importamos las siguientes librerias que nos ayudaran a obtener las rutas, a conectar con el service y por el momento a volver a la pagina anterior, respectivamente
```
import { Router, ActivatedRoute } from '@angular/router'
import { EntradasService } from '../entradas.service';
import { Location } from '@angular/common';
```
2. Agregamos las librerias al constructor
```
constructor(private entradasService: EntradasService,
	    private _route: ActivatedRoute,
	    private _router: Router,
	    private location: Location
        ) { }
```

##Obtenemos el parámetro de la ruta y realizamos la consulta al servicio.

* "/blogApp/src/app/ver-entrada/ver-entrada.component.ts"

```
entrada: any = [];
post: any;

ngOnInit() {
	this.entrada = +this._route.snapshot.paramMap.get('page');
	this.entradasService.getEntrada(this.entrada).subscribe(rows =>{
    	this.post = rows[0];
        console.log(this.post);
	});
}
goBack(): void {
	//this.location.back();
    this._router.navigate(['']);
  }
```

##Solicitamos los datos al servicio y luego a la api

* "/blogApp/src/app/entradas.service.ts"

```
getEntrada(entrada : number){
 	return this.http.get(`/api/v1/getEntrada/${entrada}`).map(res => res.json());
};
```

* "/blogApp/server/api.js"

```
router.get('/getEntrada/:entrada', (req, res) =>{
    var query = "SELECT * FROM entrada WHERE identrada="+req.params.entrada+";";
    db.query(query, function(err, rows){
        if(err){
            console.log(err);
            res.status(500).send({
                data: "Ups, ha ocurrido algo"
            });
        }
        else{
            return res.status(200).send(rows);
        }
    });
});
```
##Finalmente se crea el html

* "/blogApp/src/app/ver-entrada/ver-entrada.component.html"

```
<div class="card mt-3">
	<div class="card-header">
		<h1> {{ post.titulo }} </h1>
	</div>
	<div class="card-body">
		<p> {{ post.contenido }} <p>
	</div>
	<div class="card-footer">
		<h4> {{ post.fechaPublicacion | date:'hh:mm dd/MM/yyyy'}} </h4>
	</div>
</div>
<div class="text-center mt-3">
    <button class="btn btn-danger btn-block btn-lg" (click)=goBack()>volver</button>
</div>
```
