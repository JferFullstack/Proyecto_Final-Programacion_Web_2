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
      days: "Sábado a Domingo",
      hours: "1:00 PM | 4:00 PM",
    },
  ];

  constructor() { }

  ngOnInit(): void { }

}
