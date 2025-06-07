import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Home } from "./home/home";
import { AboutUs } from './about-us/about-us';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, AboutUs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'proyecto-landing_page-moon-pet-city';
}
