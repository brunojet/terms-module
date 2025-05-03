import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  get isFormValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valida formato de e-mail
    return emailRegex.test(this.email) && this.password.length >= 8;
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
