import { Component } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'date-timer-form',
    standalone: true,
    templateUrl: './dateTimerForm.component.html',
    styleUrl: './dateTimerForm.component.css',
    imports: [FormsModule, ReactiveFormsModule],
})
export class DateTimerFormComponent {
    constructor(private _router: Router) {}

    dateTimer = new FormGroup({
        dateInput: new FormControl(new Date().toISOString().substring(0, 10)),
        timeInput: new FormControl(''),
    });

    onDateTimerSubmit(): void {
        if (this.dateTimer.value.timeInput === '') {
            alert('Please enter a time');
            return;
        }

        if (this.dateTimer.value.dateInput === '') {
            alert('Please enter a date');
            return;
        }

        const dateTime = new Date(
            this.dateTimer.value.dateInput +
                'T' +
                this.dateTimer.value.timeInput
        );
        const now = new Date();
        if (dateTime < now) {
            alert('Please enter a future date and time');
            return;
        }

        const testString = dateTime.toString();
        this._router.navigate(['/date-timer-display', testString]);
    }
}
