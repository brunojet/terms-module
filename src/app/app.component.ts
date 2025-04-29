import { Component } from '@angular/core';
import { NoticeComponent } from './pages/notice/notice.component';
import { LoginComponent } from './pages/login/login.component';
import { TermsComponent } from './pages/terms/terms.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NoticeComponent, LoginComponent, TermsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'terms-module';
  currentView: string = 'notice';

  navigateTo(view: string): void {
    this.currentView = view;
  }
}
