import { Component } from "@angular/core";

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
 
})

export class VideojuegoComponent{
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Videjuegos Disponibles";
        this.listado = "Juegos mas populares";

        console.log("Corriendo de manera adecuada")
    }
}