
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../Service/language.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  collapseNavbar() {
    const navbarToggler = document.querySelector('.navbar-collapse') as HTMLElement;
    if (navbarToggler.classList.contains('show')) {
      (window as any).bootstrap.Collapse.getInstance(navbarToggler)?.hide();
    }
  }

  lang: 'en' | 'ar' = 'en';

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.lang$.subscribe(l => this.lang = l);
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }

}
