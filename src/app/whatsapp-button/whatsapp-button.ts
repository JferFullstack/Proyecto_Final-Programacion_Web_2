import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.css'
})
export class WhatsappButton implements OnInit {
  private _phoneNumber: string = '50496042315'; 
  private _message: string = 'Hola, me sitio en Valle de Ángeles. ¿Podrían brindarme más información?';

  @Input() buttonText: string = 'AGENDAR CITA'; 

  whatsappLink: string = '';

  ngOnInit(): void {
    this.whatsappLink = this.generateWhatsappLink(this._phoneNumber, this._message);
  }

  private generateWhatsappLink(phoneNumber: string, message: string): string {
    const encodedMessage = encodeURIComponent(message);
    const formattedPhoneNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
    return `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;
  }
}
