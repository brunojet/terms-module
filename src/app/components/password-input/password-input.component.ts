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
          <span *ngIf="showPassword">🙈</span>
          <span *ngIf="!showPassword">👁️</span>
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
