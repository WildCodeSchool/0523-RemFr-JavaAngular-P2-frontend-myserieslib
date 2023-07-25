import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieTableComponent } from './serie-table.component';

describe('SerieTableComponent', () => {
  let component: SerieTableComponent;
  let fixture: ComponentFixture<SerieTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
