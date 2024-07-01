import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-date-timer-display',
    templateUrl: './dateTimerDisplay.component.html',
    styleUrls: ['./dateTimerDisplay.component.css'],
})
export class DateTimerDisplayComponent {
    @Input() target!: string;
    targetDate: Date = new Date();
    displayStr: string = 'Xd XH XXm XXs';
    interval: any;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnInit() {
        this.targetDate = new Date(this.target);
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
        this.interval = setInterval(() => {
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
        }, 1000);
    }
}
