import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobAdsComponent } from './mob-ads.component';

describe('MobAdsComponent', () => {
  let component: MobAdsComponent;
  let fixture: ComponentFixture<MobAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
