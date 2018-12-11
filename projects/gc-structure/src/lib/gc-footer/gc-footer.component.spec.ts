import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcFooterComponent } from './gc-footer.component';

describe('GcFooterComponent', () => {
  let component: GcFooterComponent;
  let fixture: ComponentFixture<GcFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
