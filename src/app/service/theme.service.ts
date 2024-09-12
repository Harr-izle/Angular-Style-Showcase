import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(false);

  isDarkTheme$ = this.isDarkTheme.asObservable();

  setDarkTheme(isDark: boolean) {
    console.log('Setting dark theme:', isDark);
    this.isDarkTheme.next(isDark);
    document.body.classList.toggle('theme-dark', isDark);
    document.body.classList.toggle('theme-light', !isDark);
    console.log('Body classes:', document.body.classList);
  }

  toggleTheme() {
    console.log('Toggling theme');
    const newTheme = !this.isDarkTheme.value;
    this.setDarkTheme(newTheme);
  }
}