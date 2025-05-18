import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [InputComponent, CommonModule],
  template: `
    <div class="password-input-wrapper">
      <div class="input-icon-container">
        <app-input
          [type]="showPassword ? 'text' : 'password'"
          [placeholder]="'senha'"
          [validationRegex]="passwordRegex"
          [errorMessage]="'A senha deve ter pelo menos 8 caracteres.'"
          [(value)]="password"
          (valueChange)="passwordChange.emit($event)"
        ></app-input>
        <button type="button" class="toggle-password" (click)="toggleShowPassword()" tabindex="-1">
          <!-- Minimalist eye icons using SVG -->
          <svg *ngIf="!showPassword" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <ellipse cx="10" cy="10" rx="7" ry="4" stroke="#555" stroke-width="1.5"/>
            <circle cx="10" cy="10" r="1.5" fill="#555"/>
          </svg>
          <svg *ngIf="showPassword" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <ellipse cx="10" cy="10" rx="7" ry="4" stroke="#555" stroke-width="1.5"/>
            <line x1="5" y1="15" x2="15" y2="5" stroke="#555" stroke-width="1.5"/>
          </svg>
          <span class="toggle-text">{{ showPassword ? 'ocultar a senha' : 'exibir a senha' }}</span>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent {
  @Input() password: string = '';
  @Output() passwordChange = new EventEmitter<string>();
  passwordRegex: RegExp = /^.{8,}$/; // Pelo menos 8 caracteres
  showPassword = false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
