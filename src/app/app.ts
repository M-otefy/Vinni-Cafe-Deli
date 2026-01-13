import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Vinni Café & Deli');

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {

      document.addEventListener('contextmenu', e => e.preventDefault());
      document.addEventListener('copy', e => e.preventDefault());

      document.addEventListener('keydown', (e) => {

        if (e.key === 'F12') e.preventDefault();
        if (e.ctrlKey && e.shiftKey && e.key === 'I') e.preventDefault();
        if (e.ctrlKey && e.shiftKey && e.key === 'J') e.preventDefault();
        if (e.ctrlKey && e.key === 'U') e.preventDefault();
        if (e.ctrlKey && e.key === 'S') e.preventDefault();

      });

    }
    this.setDynamicTitle();

  }

  private setDynamicTitle() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(data => {
      this.titleService.setTitle(data['title'] || this.title());
    });
  }
}
