import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEpisodesComponent } from './detail-episodes.component';

describe('DetailEpisodesComponent', () => {
  let component: DetailEpisodesComponent;
  let fixture: ComponentFixture<DetailEpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailEpisodesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
