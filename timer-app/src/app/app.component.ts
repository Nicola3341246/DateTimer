import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DateTimerComponent } from './dateTimer/dateTimer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DateTimerComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
