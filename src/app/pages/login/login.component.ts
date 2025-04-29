import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Input() navigateTo!: (view: string) => void;

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      console.log('Login bem-sucedido! Redirecionando para a página de termos...');
      this.navigateTo('terms');
    } else {
      console.error('Credenciais inválidas!');
    }
  }
}
