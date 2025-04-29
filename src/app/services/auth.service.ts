import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {
    // Simulação de autenticação
    console.log(`Usuário: ${username}, Senha: ${password}`);
    return true;
  }
}
