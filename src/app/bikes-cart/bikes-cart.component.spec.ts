import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesCartComponent } from './bikes-cart.component';

describe('BikesCartComponent', () => {
  let component: BikesCartComponent;
  let fixture: ComponentFixture<BikesCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
