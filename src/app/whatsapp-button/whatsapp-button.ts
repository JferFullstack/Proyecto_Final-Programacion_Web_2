import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.css'
})
export class WhatsappButton implements OnInit {
  @Input() phoneNumber: string = '+50496042315'; 
  @Input() message: string = 'Hola, estoy interesado en sus servicios. ¿Podrían brindarme más información?'; 

  whatsappLink: string = '';

  ngOnInit(): void {
    this.whatsappLink = this.generateWhatsappLink(this.phoneNumber, this.message);
  }

  private generateWhatsappLink(phoneNumber: string, message: string): string {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  }
}
