import { Routes } from '@angular/router';
import { SettingsTestComponent } from './settings-test/settings-test.component';
import { AppComponent } from './app.component';
import { TestPageOneComponent } from './test-page-one/test-page-one.component';

export const routes: Routes = [
    { path: '', component: TestPageOneComponent },
    { path: 'test', component: SettingsTestComponent },
];
