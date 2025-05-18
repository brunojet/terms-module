import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() validationRegex: RegExp | null = null;
  @Input() errorMessage: string = 'Invalid input';

  @Output() valueChange = new EventEmitter<string>();

  isFocused: boolean = false;
  isValid: boolean = true;

  validate(): void {
    if (this.validationRegex) {
      this.isValid = this.value.length === 0 || this.validationRegex.test(this.value);
    } else {
      this.isValid = true;
    }
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
    this.validate();
  }

  onInput(): void {
    this.validate();
    this.valueChange.emit(this.value);
  }
}
