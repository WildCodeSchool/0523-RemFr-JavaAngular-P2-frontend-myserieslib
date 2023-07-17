import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgLoginComponent } from './bg-login.component';

describe('BgLoginComponent', () => {
  let component: BgLoginComponent;
  let fixture: ComponentFixture<BgLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BgLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BgLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
