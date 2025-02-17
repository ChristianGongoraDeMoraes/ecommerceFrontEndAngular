import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBuyComponent } from './show-buy.component';

describe('ShowBuyComponent', () => {
  let component: ShowBuyComponent;
  let fixture: ComponentFixture<ShowBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowBuyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
