import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../Models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl :"./zapatillas.component.html"
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Articulos en venta";
    public zapatillas: Array<Zapatilla>;  
    public marcas: String[];
    public producto:string;
    
    constructor(){
        this.marcas = new Array();
        this.producto = "";
        this.zapatillas = [
            new Zapatilla('Muñeco huggy wuggy ',100, 3234354534534,'LATAM', false),
            new Zapatilla('Figura de Mona de genshi impact',100, 65765756756756,'JPN', true),
            new Zapatilla('Esferas del dragon de dragon ball Z',100, 546546456546456,'EU', true),
            new Zapatilla('Espada de kyojuro rengoku de kimetsu no yaiba',100, 565464565464,'USA', false),
            new Zapatilla('Muñeco huggy wuggy',50, 3234354534534,'LATAM', true),
            new Zapatilla('Figura de Mona de genshi impact',50, 65765756756756,'JPN', false),
            new Zapatilla('Esferas del dragon de dragon ball Z',50, 546546456546456,'EU', true),
            new Zapatilla('Espada de kyojuro rengoku de kimetsu no yaiba',50, 565464565464,'USA', true),
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

    getAddProducto(){
        this.marcas.push(this.producto);
        alert("Producto agregado exitosamente");
    }
}