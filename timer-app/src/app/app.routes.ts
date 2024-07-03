import { Routes } from '@angular/router';
import { DateTimerFormComponent } from './dateTimerForm/dateTimerForm.component';
import { DateTimerDisplayComponent } from './dateTimerDisplay/dateTimerDisplay.component';

export const routes: Routes = [
    { path: 'date-timer-form', component: DateTimerFormComponent },
    {
        path: 'date-timer-display/:target',
        component: DateTimerDisplayComponent,
    },
    { path: '', redirectTo: 'date-timer-form', pathMatch: 'full' },
    { path: '**', redirectTo: 'date-timer-form' },
];
