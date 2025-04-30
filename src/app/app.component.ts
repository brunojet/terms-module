import { Component } from '@angular/core';
import { NoticeComponent } from './pages/notice/notice.component';
import { LoginComponent } from './pages/login/login.component';
import { TermsComponent } from './pages/terms/terms.component';
import { CommonModule } from '@angular/common';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NoticeComponent, LoginComponent, TermsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private navigationService: NavigationService) {}

  get currentView(): string {
    return this.navigationService.getCurrentView();
  }

  navigateTo(view: string): void {
    this.navigationService.navigateTo(view);
  }
}
