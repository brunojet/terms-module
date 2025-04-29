import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.scss'
})
export class NoticeComponent {
  logNavigation(): void {
    console.log('Navegando para a página de login...');
  }
}
