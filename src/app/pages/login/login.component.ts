import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  get isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valida formato de e-mail
    return emailRegex.test(this.email.trim());
  }

  get isPasswordValid(): boolean {
    return this.password.trim().length >= 8; // Senha deve ter pelo menos 8 caracteres
  }

  get isFormValid(): boolean {
    return this.isEmailValid && this.isPasswordValid;
  }

  constructor(private navigationService: NavigationService) {}

  login(): void {
    if (this.isFormValid) {
      console.log('Login bem-sucedido! Redirecionando para a página de termos...');
      this.navigateTo('terms');
    } else {
      console.error('Credenciais inválidas!');
    }
  }

  navigateTo(view: string): void {
    this.navigationService.navigateTo(view);
  }
}
