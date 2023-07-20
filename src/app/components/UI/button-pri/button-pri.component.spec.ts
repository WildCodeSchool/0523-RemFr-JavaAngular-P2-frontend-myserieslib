import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPriComponent } from './button-pri.component';

describe('ButtonPriComponent', () => {
  let component: ButtonPriComponent;
  let fixture: ComponentFixture<ButtonPriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonPriComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonPriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
