import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAllComponent } from './details-all.component';

describe('DetailsAllComponent', () => {
  let component: DetailsAllComponent;
  let fixture: ComponentFixture<DetailsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
