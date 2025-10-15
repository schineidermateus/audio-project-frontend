import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixAudio } from './mix-audio';

describe('MixAudio', () => {
  let component: MixAudio;
  let fixture: ComponentFixture<MixAudio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixAudio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixAudio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
