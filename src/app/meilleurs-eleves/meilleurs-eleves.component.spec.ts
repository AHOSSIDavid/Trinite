import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleursElevesComponent } from './meilleurs-eleves.component';

describe('MeilleursElevesComponent', () => {
  let component: MeilleursElevesComponent;
  let fixture: ComponentFixture<MeilleursElevesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeilleursElevesComponent]
    });
    fixture = TestBed.createComponent(MeilleursElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
