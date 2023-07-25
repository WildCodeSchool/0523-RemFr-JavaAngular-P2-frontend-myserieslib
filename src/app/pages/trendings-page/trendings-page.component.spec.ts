import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingsPageComponent } from './trendings-page.component';

describe('TrendingsPageComponent', () => {
  let component: TrendingsPageComponent;
  let fixture: ComponentFixture<TrendingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendingsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrendingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
