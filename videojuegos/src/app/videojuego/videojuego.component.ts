import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
 
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Videjuegos Disponibles";
        this.listado = "Juegos mas populares";

       // console.log("Corriendo de manera adecuada");
    }

    ngOnInit(){
      //console.log("OnInit ejecutado");
    }

    ngDoCheck(){
      //console.log("DoCheck ejecutado");
    }

    ngOnDestroy(){
      //console.log("OnDestroy ejecutado");
    }

    cambiarTitulo(){
      this.titulo = "Nuevos Juegos Disponibles"
    }

}