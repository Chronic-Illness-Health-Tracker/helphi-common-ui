import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
    HelphiSidebarComponent,
    UserSettingsMenuComponent,
    HelphiHeaderComponent,
    HelphiContainerComponent,
    SidebarConfig,
    HelphiAuthService,
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
export class AppComponent implements OnInit {
    constructor(
        public router: Router,
        private auth: HelphiAuthService
    ) {}

    async ngOnInit(): Promise<void> {
        await this.auth.authenticate();
        this.auth.getId();
    }

    title = 'test-common-ui';

    sidebarConfig: SidebarConfig = {
        hideSidebar: true,
        showAddDropdown: true,
        canAddConditions: false,
        canAddPatients: true,
    };

    dummyData = [{ content: 'dummy content', route: [''] }];

    addClicked() {}
}
