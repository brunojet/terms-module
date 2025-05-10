import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logintest',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './logintest.component.html',
  styleUrls: ['./logintest.component.scss']
})
export class LogintestComponent {
  email: string = '';
  isEmailFocused: boolean = false;
  isEmailValid: boolean = true;

  validateEmail(): void {
    const emailRegex = /^[^\s@]+@[^\s@]+(\.[a-zA-Z]{2,})+$/; // Unified regex for email validation
    this.isEmailValid = this.email.length == 0 || emailRegex.test(this.email);
  }

  onFocus(): void {
    this.isEmailFocused = true;
  }

  onBlur(): void {
    this.isEmailFocused = false;
    this.validateEmail();
  }

  onInput(): void {
    this.validateEmail();
  }
}
