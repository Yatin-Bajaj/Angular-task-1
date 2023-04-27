import { Component } from '@angular/core';
import { CARD } from './const-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  heading: string = CARD.heading;
  buttonText: string = CARD.buttonText;
  paragraphText: string = CARD.text;
}
