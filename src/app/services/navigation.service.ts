import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private currentView: string = 'notice';

  getCurrentView(): string {
    console.log('Current view:', this.currentView);
    return this.currentView;
  }

  navigateTo(view: string): void {
    console.log('Navigating to:', view);
    this.currentView = view;
  }
}