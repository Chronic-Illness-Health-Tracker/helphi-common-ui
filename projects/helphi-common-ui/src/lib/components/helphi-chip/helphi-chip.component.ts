import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'helphi-chip',
    standalone: true,
    imports: [NgClass],
    templateUrl: './helphi-chip.component.html',
    styleUrl: './helphi-chip.component.scss',
})
export class HelphiChipComponent {
    @Output() closed = new EventEmitter<null>();
}
