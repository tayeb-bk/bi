import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DashboardComponent,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly title = signal('bi');
}
