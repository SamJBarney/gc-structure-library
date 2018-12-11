import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcHeaderComponent } from './gc-header.component';

describe('GcHeaderComponent', () => {
  let component: GcHeaderComponent;
  let fixture: ComponentFixture<GcHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
