import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelphiHeaderComponent } from './helphi-header.component';

describe('HelphiHeaderComponent', () => {
    let component: HelphiHeaderComponent;
    let fixture: ComponentFixture<HelphiHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HelphiHeaderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(HelphiHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
