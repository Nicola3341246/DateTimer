import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-date-timer-display',
    templateUrl: './dateTimerDisplay.component.html',
    styleUrls: ['./dateTimerDisplay.component.css'],
})
export class DateTimerDisplayComponent {
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private _router: Router
    ) {}

    @Input() target!: string;
    targetDate: Date = new Date();
    displayStr: string = 'Xd XH XXm XXs';
    interval: any;

    ngOnInit() {
        this.targetDate = new Date(this.target);
        if (isNaN(this.targetDate.getTime())) {
            alert('The date is incorrect');
            this._router.navigate(['/date-timer-form']);
        }

        if (isPlatformBrowser(this.platformId)) {
            this.timerStart();
        }
    }

    ngOnDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    timerStart() {
        this.updateTimer();
        this.interval = setInterval(() => {
            this.updateTimer();
        }, 1000);
    }

    updateTimer() {
        const now: Date = new Date();
        let difference = this.targetDate.getTime() - now.getTime();

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        this.displayStr = `${days}d ${hours}H ${minutes}m ${seconds}s`;
    }
}
