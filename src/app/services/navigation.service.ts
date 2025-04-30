import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private currentView: string = 'notice';

  getCurrentView(): string {
    return this.currentView;
  }

  navigateTo(view: string): void {
    this.currentView = view;
  }
}