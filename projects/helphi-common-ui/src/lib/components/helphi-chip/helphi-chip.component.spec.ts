import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelphiChipComponent } from './helphi-chip.component';

describe('HelphiChipComponent', () => {
    let component: HelphiChipComponent;
    let fixture: ComponentFixture<HelphiChipComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HelphiChipComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(HelphiChipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
