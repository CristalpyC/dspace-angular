import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ds-help-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './help-component.component.html',
  styleUrls: ['./help-component.component.scss']
})
export class HelpComponent {
  helpCards = [
    { title: 'Uso de la plataforma', description: 'Guía para aprovechar al máximo la plataforma.', icon: 'fa-laptop', link: '/fags' },
    { title: 'Cuenta y perfil', description: 'Aprende cómo administrar tu cuenta y perfil.', icon: 'fa-user',link: '#' },
    { title: 'Privacidad y seguridad', description: 'Consejos para mantener tu cuenta segura.', icon: 'fa-shield-alt', link: '#' },
    { title: 'Reportar un problema', description: 'Informa sobre problemas y errores.', icon: 'fa-bug',link: '#' },
    { title: 'Soporte técnico', description: 'Contacta a nuestro equipo de soporte.', icon: 'fa-headset',link: '#' }
  ];

}
