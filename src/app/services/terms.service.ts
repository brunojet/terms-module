import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TermsService {

  constructor() { }

  acceptTerms(): void {
    // Simulação de persistência de aceitação de termos
    console.log('Termos aceitos!');
  }
}
