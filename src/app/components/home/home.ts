import { Component } from '@angular/core';
import { Slider } from "../slider/slider";
import { RouterOutlet } from "../../../../node_modules/@angular/router/types/_router_module-chunk";
import { Products } from "../products/products";
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-home',
  imports: [Slider],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
