// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, InicioComponent, AcercaDeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moonpetcity';
}