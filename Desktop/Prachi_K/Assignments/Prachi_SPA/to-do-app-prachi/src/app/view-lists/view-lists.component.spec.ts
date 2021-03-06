import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListsComponent } from './view-lists.component';

describe('ViewListsComponent', () => {
  let component: ViewListsComponent;
  let fixture: ComponentFixture<ViewListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
