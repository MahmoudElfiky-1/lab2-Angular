import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";
import { Products } from "./components/products/products";
import { Slider } from "./components/slider/slider";

@Component({
  selector: 'app-root',
  imports: [Footer, Navbar, Products, Slider],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('E-Commerce');
}
