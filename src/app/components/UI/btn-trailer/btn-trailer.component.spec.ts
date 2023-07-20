import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTrailerComponent } from './btn-trailer.component';

describe('BtnTrailerComponent', () => {
  let component: BtnTrailerComponent;
  let fixture: ComponentFixture<BtnTrailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnTrailerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
