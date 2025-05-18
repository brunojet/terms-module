import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="input-container">
      <label *ngIf="isFocused || control.value" [class.focused]="isFocused || control.value" [class.invalid]="!control.valid">{{ placeholder }}</label>
      <input
        [type]="type"
        [formControl]="control"
        (focus)="onFocus()"
        (blur)="onBlur()"
        [class.focused]="isFocused"
        [class.invalid]="!control.valid"
        [placeholder]="placeholder"
      />
      <div *ngIf="!control.valid && !isFocused" class="error-message">{{ errorMessage }}</div>
    </div>
  `,
  styleUrls: ['./input.component.scss']
})
export class InputReactiveComponent {
  @Input() control!: FormControl;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() errorMessage: string = 'Invalid input';

  isFocused = false;

  onFocus() {
    this.isFocused = true;
  }
  onBlur() {
    this.isFocused = false;
  }
}
