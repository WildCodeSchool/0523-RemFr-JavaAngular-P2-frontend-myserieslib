import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAccComponent } from './button-acc.component';

describe('ButtonAccComponent', () => {
  let component: ButtonAccComponent;
  let fixture: ComponentFixture<ButtonAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonAccComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
