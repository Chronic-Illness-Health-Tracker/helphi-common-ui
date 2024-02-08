import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelphiSidebarComponent } from '../../../helphi-common-ui/src/lib/helphi-sidebar/helphi-sidebar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HelphiSidebarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'test-common-ui';
}
