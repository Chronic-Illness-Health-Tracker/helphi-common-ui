import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
    NgbDropdownModule,
    NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { HelphiAuthService } from '../../service/helphi-auth.service';

@Component({
    selector: 'helphi-user-settings-menu',
    standalone: true,
    imports: [NgbTooltipModule, NgbDropdownModule],
    templateUrl: './user-settings-menu.component.html',
    styleUrl: './user-settings-menu.component.scss',
})
export class UserSettingsMenuComponent {
    @Input({ required: true }) helpRoute!: string;
    @Input({ required: true }) settingRoute!: string;
    @Input({ required: true }) profileRoute!: string;

    constructor(
        protected router: Router,
        protected authService: HelphiAuthService
    ) {}
}
