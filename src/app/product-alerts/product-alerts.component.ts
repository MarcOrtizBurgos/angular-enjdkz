import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product: User | undefined;
  @Output() notify = new EventEmitter();
}
