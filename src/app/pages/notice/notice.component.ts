import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.scss'
})
export class NoticeComponent {
  constructor(private navigationService: NavigationService) {}

  navigateTo(view: string): void {
    this.navigationService.navigateTo(view);
  }
}
