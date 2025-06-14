import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrls: ['./services.css'],
  imports: [CommonModule]
})

export class Services {
  servicios = [
    {
      titulo: 'Consulta veterinaria domiciliaria',
      descripcion: 'Atención profesional en la comodidad de tu hogar, con diagnósticos personalizados y cuidados adaptados a las necesidades de tu mascota.',
      icono: 'fa-house-medical',
      fila: 1
    },
    {
      titulo: 'Exámenes de laboratorio',
      descripcion: 'Análisis clínicos completos y precisos que permiten detectar enfermedades, evaluar el estado de salud y planificar tratamientos adecuados.',
      icono: 'fa-vials',
      fila: 1
    },
    {
      titulo: 'Venta de productos veterinarios',
      descripcion: 'Amplia variedad de alimentos, medicamentos y accesorios de alta calidad para el bienestar y cuidado integral de tu mascota.',
      icono: 'fa-store',
      fila: 1
    },
    {
      titulo: 'Control de vacunas y desparasitado',
      descripcion: 'Seguimiento completo y actualizado del calendario sanitario para proteger a tu mascota contra enfermedades comunes y parásitos.',
      icono: 'fa-syringe',
      fila: 2
    },
    {
      titulo: 'Procedimientos quirúrgicos',
      descripcion: 'Intervenciones seguras realizadas por profesionales altamente capacitados, garantizando la recuperación y bienestar de tu mascota.',
      icono: 'fa-stethoscope',
      fila: 2
    },
    {
      titulo: 'Profilaxis dentales',
      descripcion: 'Limpieza y cuidado dental especializado para prevenir enfermedades orales y mantener una boca saludable en tu mascota.',
      icono: 'fa-tooth',
      fila: 2
    }
  ];
}
