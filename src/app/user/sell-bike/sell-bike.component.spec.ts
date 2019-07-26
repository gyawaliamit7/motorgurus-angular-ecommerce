import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellBikeComponent } from './sell-bike.component';

describe('SellBikeComponent', () => {
  let component: SellBikeComponent;
  let fixture: ComponentFixture<SellBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
