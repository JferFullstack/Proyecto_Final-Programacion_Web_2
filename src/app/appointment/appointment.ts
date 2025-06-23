import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './appointment.html',
  styleUrl: './appointment.css'
})
export class Appointment implements OnInit {

  private ctaPhoneNumber: string = '50496042315';
  private ctaMessage: string = 'Hola, Mi nombre es Lucia; me gustaría agendar una consulta a domicilio en Valle de Ángeles.';

  public ctaWhatsappLink: string = '';
  public ctaButtonText: string = 'AGENDAR CITA';

  constructor() { }

  ngOnInit(): void {
    this.ctaWhatsappLink = this.generateWhatsappLink(this.ctaPhoneNumber, this.ctaMessage);
  }

  private generateWhatsappLink(phoneNumber: string, message: string): string {
    let encodedMessage = encodeURIComponent(message);
    encodedMessage = encodedMessage.replace(/%20/g, '+');
    const formattedPhoneNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
    return `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;
  }
}