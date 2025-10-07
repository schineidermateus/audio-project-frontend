import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutAudio } from './cut-audio';

describe('CutAudio', () => {
  let component: CutAudio;
  let fixture: ComponentFixture<CutAudio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutAudio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutAudio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
