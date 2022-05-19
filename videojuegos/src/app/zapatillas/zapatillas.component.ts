import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../Models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl :"./zapatillas.component.html"
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Tarjetas de regalo";
    public zapatillas: Array<Zapatilla>;  
    
    constructor(){
        this.zapatillas = [
            new Zapatilla('Amazon',100, 3234354534534,'LATAM', true),
            new Zapatilla('Spotify',100, 65765756756756,'JPN', true),
            new Zapatilla('Steam',100, 546546456546456,'EU', true),
            new Zapatilla('Nintendo',100, 565464565464,'USA', false)
        ]
    }

    ngOnInit(){
        console.log(this.zapatillas);
    }
}