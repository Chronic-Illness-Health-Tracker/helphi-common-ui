import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
    HelphiSidebarComponent,
    UserSettingsMenuComponent,
    HelphiHeaderComponent,
    HelphiContainerComponent,
} from '../../../helphi-common-ui/src/public-api';
import { MatRippleModule } from '@angular/material/core';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        UserSettingsMenuComponent,
        MatRippleModule,
        HelphiHeaderComponent,
        HelphiSidebarComponent,
        HelphiContainerComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    constructor(public router: Router) {}

    title = 'test-common-ui';

    dummyData: Array<string> = [
        'Heart Failure',
        'Hypertrophic Cardiomyopathy (HCM)',
        'Short QT Syndrome (SQTS)',
        'Catecholaminergic Polymorphic Ventricular Tachycardia (CPVT)',
        'Brugada syndrome',
    ];

    addClicked() {}
}
