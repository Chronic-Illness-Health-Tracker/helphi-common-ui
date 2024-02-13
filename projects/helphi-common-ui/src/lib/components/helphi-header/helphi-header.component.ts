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
    @Input() title?: string;
    @Input() titleAlwaysVisible: boolean = false;
    @Output() toggleSidebar = new EventEmitter<null>();

    toggle() {
        this.toggleSidebar.emit();
    }
}
