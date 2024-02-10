import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserSettingsMenuComponent } from '../../../helphi-common-ui/src/public-api';
import { MatRippleModule } from '@angular/material/core';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, UserSettingsMenuComponent, MatRippleModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'test-common-ui';
}
