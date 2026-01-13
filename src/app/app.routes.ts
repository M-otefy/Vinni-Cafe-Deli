import { Shisha } from './menu/shisha/shisha';
import { Appetizer } from './menu/appetizer/appetizer';
import { Routes } from '@angular/router';
import { Menu } from './menu/menu';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Drinks } from './menu/drinks/drinks';
import { Breakfast } from './menu/breakfast/breakfast';
import { Salad } from './menu/salad/salad';
import { Soup } from './menu/soup/soup';
import { Pasta } from './menu/pasta/pasta';
import { Pizza } from './menu/pizza/pizza';
import { Sandwichs } from './menu/sandwichs/sandwichs';
import { MainCourse } from './menu/main-course/main-course';
import { Dessert } from './menu/dessert/dessert';
import { Hiring } from './hiring/hiring';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, data: { title: 'Home' } },
  { path: 'menu', component: Menu, data: { title: 'Menu' } },
  { path: 'about', component: About, data: { title: 'About' } },
  { path: 'contact', component: Contact, data: { title: 'Contact' } },

  { path: 'drinks', component: Drinks, data: { title: 'Drinks' } },
  { path: 'breakfast', component: Breakfast, data: { title: 'Breakfast' } },
  { path: 'salad', component: Salad, data: { title: 'Salads' } },
  { path: 'soup', component: Soup, data: { title: 'Soup' } },
  { path: 'pasta', component: Pasta, data: { title: 'Pasta' } },
  { path: 'pizza', component: Pizza, data: { title: 'Pizza' } },
  { path: 'sandwich', component: Sandwichs, data: { title: 'Sandwiches' } },
  { path: 'main-course', component: MainCourse, data: { title: 'Main Course' } },
  { path: 'appetizers', component: Appetizer, data: { title: 'Appetizers' } },
  { path: 'dessert', component: Dessert, data: { title: 'Dessert' } },
  { path: 'shisha', component: Shisha, data: { title: 'Shisha' } },
  { path: 'hiring', component: Hiring, data: { title: 'Hiring' } },
];

