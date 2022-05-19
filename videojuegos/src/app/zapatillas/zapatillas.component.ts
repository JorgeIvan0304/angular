import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../Models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl :"./zapatillas.component.html"
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Tarjetas de regalo";
    public zapatillas: Array<Zapatilla>;  
    public marcas: String[];
    
    constructor(){
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Amazon',100, 3234354534534,'LATAM', false),
            new Zapatilla('Spotify',100, 65765756756756,'JPN', true),
            new Zapatilla('Steam',100, 546546456546456,'EU', true),
            new Zapatilla('Nintendo',100, 565464565464,'USA', false),
            new Zapatilla('Amazon',50, 3234354534534,'LATAM', true),
            new Zapatilla('Spotify',50, 65765756756756,'JPN', false),
            new Zapatilla('Steam',50, 546546456546456,'EU', true),
            new Zapatilla('Nintendo',50, 565464565464,'USA', true),
        ]
    }

    ngOnInit(){
        console.log(this.zapatillas);
        this.geTmarcas();
    }

    geTmarcas(){
       this.zapatillas.forEach((value, index) =>{
           if(this.marcas.indexOf(value.nombre) < 0){ 
           this.marcas.push(value.nombre);
           }
       }) ;
       console.log(this.marcas)
    }
}