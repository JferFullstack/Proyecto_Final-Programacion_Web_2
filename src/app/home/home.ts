import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

   businessHours = [
    {
      days: "Lunes a Viernes",
      hours: "8:00 AM | 5:00 PM",
    },
    {
      days: "Sábado",
      hours: "8:30 AM | 12:00 PM",
    },
  ];

  constructor() { }

  ngOnInit(): void { }

}
