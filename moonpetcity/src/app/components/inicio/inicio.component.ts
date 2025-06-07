
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  
  clinicInfo = {
    name: 'MOON PET CITY',
    title: 'CLÍNICA VETERINARIA',
    promotion: {
      day: 'Martes',
      service: 'esterilización',
      discount: 10
    },
    schedule: {
      weekdays: {
        days: 'Lunes a viernes',
        hours: '8:00 am - 5:00 pm'
      },
      weekends: {
        days: 'Sábados y Domingos',
        hours: '1:00 pm - 4:00 pm'
      }
    }
  };

 
  petImages = {
    cat: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    dog: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  };

 
  isMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
    this.initializeComponent();
  }

  private initializeComponent(): void {
    console.log('Componente Inicio inicializado');
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    this.isMenuOpen = false;
  }

  onImageError(event: any): void {
    console.warn('Error al cargar imagen:', event.target.src);
    event.target.src = 'assets/images/placeholder-pet.jpg';
  }

  onScheduleAppointment(): void {
    this.navigateToSection('cita');
  }

  onPromotionClick(): void {
    console.log('Promoción clickeada: Esterilización con descuento');
  }

  getCurrentDay(): string {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return days[new Date().getDay()];
  }

  isPromotionDay(): boolean {
    return this.getCurrentDay() === this.clinicInfo.promotion.day;
  }

  getClinicStatus(): { isOpen: boolean; message: string } {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;

    let isOpen = false;
    let message = '';

    if (currentDay >= 1 && currentDay <= 5) {
      const openTime = 8 * 60;
      const closeTime = 17 * 60;
      
      if (currentTime >= openTime && currentTime < closeTime) {
        isOpen = true;
        message = '¡Estamos abiertos!';
      } else {
        message = 'Cerrado - Abrimos de 8:00 AM a 5:00 PM';
      }
    } else {
      const openTime = 13 * 60;
      const closeTime = 16 * 60;
      
      if (currentTime >= openTime && currentTime < closeTime) {
        isOpen = true;
        message = '¡Estamos abiertos!';
      } else {
        message = 'Cerrado - Abrimos de 1:00 PM a 4:00 PM';
      }
    }

    return { isOpen, message };
  }
}