import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { HelphiHeaderComponent } from '../helphi-header/helphi-header.component';
import { Offcanvas } from 'bootstrap';
import { SidebarConfig } from '../../api/sidebar-config';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
    selector: 'helphi-sidebar',
    standalone: true,
    imports: [HelphiHeaderComponent, NgbDropdownModule],
    templateUrl: './helphi-sidebar.component.html',
    styleUrl: './helphi-sidebar.component.scss',
})
export class HelphiSidebarComponent implements AfterViewInit {
    @ViewChild('sidebar') private sidebar!: ElementRef;
    private offCanvasOpen: boolean = false;
    protected offcanvas!: Offcanvas;

    @Input() title?: string;
    @Input() sidebarContent?: Array<string>;
    @Input({ required: true }) sidebarConfig!: SidebarConfig;
    @Input() showAddButton: boolean = false;
    @Input() set showOffcanvas(show: boolean) {
        if (this.offCanvasOpen !== show) {
            if (this.offcanvas) {
                if (show) {
                    this.offcanvas.show();
                } else {
                    this.offcanvas.hide();
                }
            }
        }
        this.offCanvasOpen = show;
    }

    @Output() closed = new EventEmitter<null>();
    @Output() opened = new EventEmitter<null>();

    constructor(protected router: Router) {}

    ngAfterViewInit(): void {
        this.offcanvas = new Offcanvas(this.sidebar.nativeElement);
    }

    toggleSidebar() {
        this.offcanvas.toggle();
        this.offCanvasOpen ? this.opened.emit() : this.closed.emit();
        this.offCanvasOpen = !this.offCanvasOpen;
    }
}
