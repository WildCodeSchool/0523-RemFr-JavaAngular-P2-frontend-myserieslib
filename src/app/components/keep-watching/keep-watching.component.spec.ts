import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepWatchingComponent } from './keep-watching.component';

describe('KeepWatchingComponent', () => {
  let component: KeepWatchingComponent;
  let fixture: ComponentFixture<KeepWatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeepWatchingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeepWatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
