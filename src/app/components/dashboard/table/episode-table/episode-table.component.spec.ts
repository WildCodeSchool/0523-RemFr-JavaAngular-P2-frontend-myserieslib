import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeTableComponent } from './episode-table.component';

describe('EpisodeTableComponent', () => {
  let component: EpisodeTableComponent;
  let fixture: ComponentFixture<EpisodeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodeTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
