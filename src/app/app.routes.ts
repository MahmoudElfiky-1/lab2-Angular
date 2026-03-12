import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { Contact } from './components/contact/contact';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home' ,component:Home},
  {path:'products', component:Products},
  {path:'contact' , component:Contact},
  {path:'**', component:NotFound}
];
