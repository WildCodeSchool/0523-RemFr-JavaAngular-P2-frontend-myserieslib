import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInformationsComponent } from './detail-informations.component';

describe('DetailInformationsComponent', () => {
  let component: DetailInformationsComponent;
  let fixture: ComponentFixture<DetailInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailInformationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
