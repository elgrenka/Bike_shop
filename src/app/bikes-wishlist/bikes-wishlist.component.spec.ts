import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesWishlistComponent } from './bikes-wishlist.component';

describe('BikesWishlistComponent', () => {
  let component: BikesWishlistComponent;
  let fixture: ComponentFixture<BikesWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesWishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
