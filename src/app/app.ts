import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Home } from "./home/home";
import { AboutUs } from './about-us/about-us';
import { Appointment } from './appointment/appointment';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, AboutUs, Appointment ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '-moon-pet-city-landing-page';
}
