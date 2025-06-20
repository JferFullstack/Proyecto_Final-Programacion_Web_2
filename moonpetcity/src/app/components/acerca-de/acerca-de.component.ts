// src/app/components/acerca-de/acerca-de.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acerca-de',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent implements OnInit {

  // Datos de la empresa
  companyInfo = {
    vision: {
      title: 'VISIÓN',
      icon: '🎯',
      description: 'Convertir Moon Pet City en un servicio veterinario domiciliario de alto rendimiento; haciendo uso de equipos y herramientas que provean todo lo necesario para el cuidado de las mascotas.'
    },
    mission: {
      title: 'MISIÓN',
      icon: '💝',
      description: 'Ofrecer atención personalizada en el hogar de cada cliente con su respectiva mascota/s, englobando el principio "ONE HEALTH"; obteniendo diagnósticos y tratamientos oportunos así como específicos, para salvaguardar la vida de los mismos.'
    },
    values: [
      {
        icon: '🐾',
        title: 'Amor por los animales',
        description: 'Tratamos a cada mascota con el cariño que merece'
      },
      {
        icon: '🏠',
        title: 'Servicio a domicilio',
        description: 'Comodidad para ti y tu mascota en casa'
      },
      {
        icon: '⚕️',
        title: 'Excelencia médica',
        description: 'Profesionales altamente capacitados'
      },
      {
        icon: '🤝',
        title: 'Confianza',
        description: 'Construimos relaciones duraderas con nuestros clientes'
      }
    ]
  };

  // Estadísticas de la empresa (opcional)
  stats = {
    yearsExperience: 5,
    happyClients: 1500,
    successfulTreatments: 3200,
    veterinarians: 8
  };

  constructor() { }

  ngOnInit(): void {
    this.initializeComponent();
  }

  /**
   * Inicializa el componente y configura animaciones si es necesario
   */
  private initializeComponent(): void {
    // Animación de entrada para las tarjetas
    this.animateCardsOnScroll();
    console.log('Componente Acerca de inicializado');
  }

  /**
   * Configura animaciones al hacer scroll (opcional)
   */
  private animateCardsOnScroll(): void {
    // Observer para animaciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      threshold: 0.1
    });

    // Observar elementos cuando estén disponibles
    setTimeout(() => {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => observer.observe(card));
    }, 100);
  }

  /**
   * Maneja clics en las tarjetas de visión/misión
   * @param type - Tipo de tarjeta clickeada
   */
  onCardClick(type: string): void {
    console.log(`Tarjeta ${type} clickeada`);
    // Aquí podrías agregar lógica adicional como mostrar más información
  }

  /**
   * Maneja clics en los valores
   * @param value - Valor clickeado
   */
  onValueClick(value: any): void {
    console.log(`Valor clickeado: ${value.title}`);
    // Aquí podrías mostrar más información sobre el valor
  }

  /**
   * Obtiene información estadística formateada
   */
  getFormattedStats() {
    return {
      experience: `${this.stats.yearsExperience}+ años`,
      clients: `${this.stats.happyClients}+ clientes`,
      treatments: `${this.stats.successfulTreatments}+ tratamientos`,
      team: `${this.stats.veterinarians} veterinarios`
    };
  }

  /**
   * Scroll suave hacia la sección de contacto
   */
  scrollToContact(): void {
    const element = document.getElementById('cita');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}