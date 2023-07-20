import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPcComponent } from './nav-pc.component';

describe('NavPcComponent', () => {
  let component: NavPcComponent;
  let fixture: ComponentFixture<NavPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavPcComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
