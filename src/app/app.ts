import { Component } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { Home } from "./home/home";
import { AboutUs } from './about-us/about-us';
import { Appointment } from './appointment/appointment';
import { Footer } from './footer/footer';
import { Services } from './services/services';
import { WhatsappButton } from './whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Home, AboutUs, Appointment, Footer, Services, WhatsappButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '-moon-pet-city-landing-page';
}
