import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [InputComponent],
  template: `
    <app-input
      [type]="'email'"
      [placeholder]="'e-mail'"
      [validationRegex]="emailRegex"
      [errorMessage]="'o campo e-mail deve ser um e-mail válido'"
      [(value)]="email"
      (valueChange)="emailChange.emit($event)"
    ></app-input>
  `,
  styleUrls: ['./email-input.component.scss']
})
export class EmailInputComponent {
  @Input() email: string = '';
  @Output() emailChange = new EventEmitter<string>();
  emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
}