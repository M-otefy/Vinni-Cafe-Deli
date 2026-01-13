import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private langSubject = new BehaviorSubject<'en' | 'ar'>('en');
  lang$ = this.langSubject.asObservable();

  toggleLanguage() {
    this.langSubject.next(this.langSubject.value === 'en' ? 'ar' : 'en');
  }

  get currentLang() {
    return this.langSubject.value;
  }
}
