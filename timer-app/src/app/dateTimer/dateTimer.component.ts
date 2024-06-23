import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { get } from "http";

@Component({
    selector: 'date-timer',
    standalone: true,
    templateUrl: './dateTimer.component.html',
    styleUrl: './dateTimer.component.css',
    imports: [FormsModule],
})

export class DateTimerComponent {
    dateInputValue: string = new Date().toISOString().substring(0,10);
    timeInputValue: string = '';
}