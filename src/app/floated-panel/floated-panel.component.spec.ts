import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatedPanelComponent } from './floated-panel.component';

describe('FloatedPanelComponent', () => {
  let component: FloatedPanelComponent;
  let fixture: ComponentFixture<FloatedPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatedPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
