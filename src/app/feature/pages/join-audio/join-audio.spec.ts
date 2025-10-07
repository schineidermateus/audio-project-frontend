import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAudio } from './join-audio/join-audio';

describe('JoinAudio', () => {
  let component: JoinAudio;
  let fixture: ComponentFixture<JoinAudio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinAudio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinAudio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
