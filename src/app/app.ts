import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  navOpen = signal(false);
  theme = signal<'dark'|'light'>('dark');

  toggleNav() { this.navOpen.set(!this.navOpen()); }
  toggleTheme() { this.theme.set(this.theme()==='dark' ? 'light' : 'dark'); }
}
