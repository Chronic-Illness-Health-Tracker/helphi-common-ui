import { UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'helphi-header',
    standalone: true,
    imports: [UpperCasePipe],
    templateUrl: './helphi-header.component.html',
    styleUrl: './helphi-header.component.scss',
})
export class HelphiHeaderComponent {
    private _toggled: boolean = true;

    @Input() title?: string;
    @Output() toggleSidebar = new EventEmitter<boolean>();

    toggle() {
        this.toggleSidebar.emit(!this._toggled);
    }
}
