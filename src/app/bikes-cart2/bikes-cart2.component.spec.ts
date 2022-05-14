import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesCart2Component } from './bikes-cart2.component';

describe('BikesCart2Component', () => {
  let component: BikesCart2Component;
  let fixture: ComponentFixture<BikesCart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesCart2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesCart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
