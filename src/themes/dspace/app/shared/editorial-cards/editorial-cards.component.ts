import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-editorial-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editorial-cards.component.html',
  styleUrl: './editorial-cards.component.scss'
})
export class EditorialCardsComponent {
  isContentVisible = false;

  @Input() logoUrl: string = '';
  @Input() title: string = '';

  toggleCardContent() {
    this.isContentVisible = !this.isContentVisible;
  }
}
