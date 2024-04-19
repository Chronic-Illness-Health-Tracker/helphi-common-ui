import { Component } from '@angular/core';
import { HelphiAuthService } from '../../service/helphi-auth.service';

@Component({
    selector: 'lib-verify-login',
    standalone: true,
    imports: [],
    templateUrl: './verify-login.component.html',
    styleUrl: './verify-login.component.scss',
})
export class VerifyLoginComponent {
    constructor(protected authService: HelphiAuthService) {}
}
