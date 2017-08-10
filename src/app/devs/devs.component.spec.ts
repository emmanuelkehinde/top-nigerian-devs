import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsComponent } from './devs.component';

describe('DevsComponent', () => {
  let component: DevsComponent;
  let fixture: ComponentFixture<DevsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
