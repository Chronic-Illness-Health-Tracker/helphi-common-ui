import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HelphiHeaderComponent } from '../helphi-header/helphi-header.component';
import { UserSettingsMenuComponent } from '../user-settings-menu/user-settings-menu.component';
import { HelphiSidebarComponent } from '../helphi-sidebar/helphi-sidebar.component';
import { SidebarConfig } from '../../api/sidebar-config';

@Component({
    selector: 'helphi-container',
    standalone: true,
    imports: [
        HelphiHeaderComponent,
        UserSettingsMenuComponent,
        HelphiSidebarComponent,
    ],
    templateUrl: './helphi-container.component.html',
    styleUrl: './helphi-container.component.scss',
})
export class HelphiContainerComponent {
    protected sidebarOpen: boolean = false;

    @Input() title?: string;
    @Input() sidebarContent?: Array<{ content: string; route: Array<string> }>;
    @Input({ required: true }) sidebarConfig!: SidebarConfig;
    @Input({ required: true }) helpRoute!: string;
    @Input({ required: true }) settingRoute!: string;
    @Input({ required: true }) profileRoute!: string;

    @Output() addClicked = new EventEmitter<null>();

    sidebarToggled() {
        this.sidebarOpen = !this.sidebarOpen;
    }

    sidebarOpened() {
        this.sidebarOpen = true;
    }
    sidebarClosed() {
        this.sidebarOpen = false;
    }

    onAddClicked() {
        this.addClicked.emit();
    }
}
