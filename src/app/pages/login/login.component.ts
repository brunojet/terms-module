import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailInputComponent } from '../../components/email-input/email-input.component';
import { PasswordInputComponent } from '../../components/password-input/password-input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, EmailInputComponent, PasswordInputComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  get isPasswordValid(): boolean {
    return this.password.trim().length >= 8; // Senha deve ter pelo menos 8 caracteres
  }

  get isFormValid(): boolean {
    return this.email.trim().length > 0 && this.isPasswordValid; // Considera o campo de e-mail válido se não estiver vazio
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
