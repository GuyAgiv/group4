import { TestBed } from '@angular/core/testing';

import { VideoChangerService } from './video-changer.service';

describe('VideoChangerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoChangerService = TestBed.get(VideoChangerService);
    expect(service).toBeTruthy();
  });
});
