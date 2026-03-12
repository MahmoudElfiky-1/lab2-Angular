import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScaleElement } from '../../Directives/scale-element';

interface Product{
  id:number,
  name:string,
  image:string,
  inStock:boolean,
  price:number
}
@Component({
  selector: 'app-products',
  imports: [CommonModule , ScaleElement],
  templateUrl: './products.html',
  styleUrl: './products.css',
})

export class Products {
  products:Product[]=[
    {id:1,name:"Wireless Headphones",price: 120,image:"/imgs/headPhone.jfif",inStock:true},
    {id:2,name:"Smart Watch",image:"/imgs/smartPhone.jfif",price: 90,inStock:false},
    {id:2,name:"Running Shoes",image:"/imgs/running.jfif",price: 120,inStock:true},
    {id:2,name:"Laptop Backpack",image:"/imgs/Backpack.jfif",price: 200,inStock:false},
  ]
}
