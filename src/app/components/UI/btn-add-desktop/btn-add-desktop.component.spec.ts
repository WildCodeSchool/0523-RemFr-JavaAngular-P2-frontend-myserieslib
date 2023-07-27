import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddDesktopComponent } from './btn-add-desktop.component';

describe('BtnAddDesktopComponent', () => {
  let component: BtnAddDesktopComponent;
  let fixture: ComponentFixture<BtnAddDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAddDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnAddDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
