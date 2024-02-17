import { Component } from '@angular/core';
import { HelphiChipComponent } from '../../../../helphi-common-ui/src/public-api';

@Component({
    selector: 'app-test-page-one',
    standalone: true,
    imports: [HelphiChipComponent],
    templateUrl: './test-page-one.component.html',
    styleUrl: './test-page-one.component.scss',
})
export class TestPageOneComponent {}
