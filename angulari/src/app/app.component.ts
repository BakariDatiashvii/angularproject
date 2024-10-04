import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angulari';
  constructor(private router: Router) {}


  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
