import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUpComponent } from './top-up.component';

describe('TopUpComponent', () => {
  let component: TopUpComponent;
  let fixture: ComponentFixture<TopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopUpComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
