import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TooltipDirective } from './tooltip.directive';

@Component({
  template: `
    <span class="tooltipWrapper">
        <h2 appTooltip="Aktionen">Test tooltip</h2>
    </span>
    <span class="tooltipWrapper">
        <h2 appTooltip="">no Text</h2>
    </span>
    <span class="tooltipWrapper">
        <h2>no Tooltip</h2>
    </span>
    <span class="tooltipWrapper">
      <h2 [appTooltip]="box.value">Value</h2>
    </span>
    <span class="tooltipWrapper">
      <input #box [appTooltip]="box.value" value="Value">
    </span>`,
  styles: [`
    .tooltipWrapper {
      position: relative;
      display: block;
    }
  `]
})
export class TestComponent {
}


describe('TooltipDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TooltipDirective, TestComponent]
    }).createComponent(TestComponent);

    fixture.detectChanges();

    component = fixture.componentInstance;
    inputEl = fixture.debugElement.queryAll(By.directive(TooltipDirective));
  });

  it('should display Aktionen in tooltip 0', () => {
    const mouseEnterEvent = new Event('mouseenter');
    inputEl[0].nativeElement.dispatchEvent(mouseEnterEvent);

    console.log(inputEl);

    fixture.detectChanges();

    expect(inputEl[0].nativeNode.nextSibling.getElementsByClassName('tooltip-text')[0].innerText).toEqual('Aktionen');
  });

  it('should display nothing in tooltip 1', () => {
    const mouseEnterEvent = new Event('mouseenter');
    inputEl[1].nativeElement.dispatchEvent(mouseEnterEvent);
    fixture.detectChanges();

    expect(inputEl[1].nativeNode.nextSibling.getElementsByClassName('tooltip-text')[0].innerText).toEqual('');
  });

  it('should display Value in tooltip 2', () => {
    const mouseEnterEvent = new Event('mouseenter');
    inputEl[2].nativeElement.dispatchEvent(mouseEnterEvent);
    fixture.detectChanges();

    expect(inputEl[2].nativeNode.nextSibling.getElementsByClassName('tooltip-text')[0].innerText).toEqual('Value');
  });

  it('should display newValue in tooltip 3', () => {
    inputEl[3].nativeElement.value = 'newValue';
    inputEl[3].nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    inputEl[3].nativeElement.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();

    expect(inputEl[3].nativeNode.nextSibling.getElementsByClassName('tooltip-text')[0].innerText).toEqual('newValue');
  });
});
