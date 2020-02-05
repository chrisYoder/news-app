import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RugbyNewsComponent } from './rugby-news.component';

describe('RugbyNewsComponent', () => {
  let component: RugbyNewsComponent;
  let fixture: ComponentFixture<RugbyNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RugbyNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RugbyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
