import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoembedComponent } from './videoembed.component';

describe('VideoembedComponent', () => {
  let component: VideoembedComponent;
  let fixture: ComponentFixture<VideoembedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoembedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoembedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
