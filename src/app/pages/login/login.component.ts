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
  username: string = '';
  password: string = '';

  constructor(private navigationService: NavigationService) {}

  login(): void {
    if (this.username === 'dev' && this.password === 'dev') {
      console.log('Login bem-sucedido! Redirecionando para a página de termos...');
      this.navigationService.navigateTo('terms');
    } else {
      console.error('Credenciais inválidas!');
    }
  }
}
