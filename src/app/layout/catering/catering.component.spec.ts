import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringComponent } from './catering.component';

describe('CateringComponent', () => {
  let component: CateringComponent;
  let fixture: ComponentFixture<CateringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
