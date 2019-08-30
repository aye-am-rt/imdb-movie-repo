import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResulsComponent } from './search-resuls.component';

describe('SearchResulsComponent', () => {
  let component: SearchResulsComponent;
  let fixture: ComponentFixture<SearchResulsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResulsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResulsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
