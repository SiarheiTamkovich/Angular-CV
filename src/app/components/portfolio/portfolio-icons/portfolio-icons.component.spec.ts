import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioIconsComponent } from './portfolio-icons.component';

describe('PortfolioIconsComponent', () => {
  let component: PortfolioIconsComponent;
  let fixture: ComponentFixture<PortfolioIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
