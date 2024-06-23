import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";

@Component({
    selector: 'date-timer',
    standalone: true,
    templateUrl: './dateTimerForm.component.html',
    styleUrl: './dateTimerForm.component.css',
    imports: [FormsModule, ReactiveFormsModule],
})

export class DateTimerComponent {
    dateTimer = new FormGroup({
        dateInput: new FormControl(new Date().toISOString().substring(0,10)),
        timeInput: new FormControl(''),
    });

    onDateTimerSubmit() {
        if (this.dateTimer.value.timeInput === '') {
            alert('Please enter a time');
        }

        if (this.dateTimer.value.dateInput === '') {
            alert('Please enter a date');
        }

        const dateTime = new Date(this.dateTimer.value.dateInput + 'T' + this.dateTimer.value.timeInput);
        const now = new Date();
        if (dateTime < now) {
            alert('Please enter a future date and time');
        }
    }
}