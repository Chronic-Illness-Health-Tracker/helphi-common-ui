import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'helphi-chip',
    standalone: true,
    imports: [],
    templateUrl: './helphi-chip.component.html',
    styleUrl: './helphi-chip.component.scss',
})
export class HelphiChipComponent {
    @Input({ required: true }) content!: string;
    @Output() closed = new EventEmitter<null>();
}
