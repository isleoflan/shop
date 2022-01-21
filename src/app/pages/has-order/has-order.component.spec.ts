import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasOrderComponent } from './has-order.component';

describe('HasOrderComponent', () => {
  let component: HasOrderComponent;
  let fixture: ComponentFixture<HasOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HasOrderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HasOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
