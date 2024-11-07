import { Component } from '@angular/core';

@Component({
  selector: 'ds-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'] 
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    console.log('Formulario enviado:', { name: this.name, email: this.email, message: this.message });
  }
}
