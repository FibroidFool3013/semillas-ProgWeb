import { TestBed } from '@angular/core/testing';

import { SemillasService } from './semillas.service';

describe('SemillasService', () => {
  let service: SemillasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemillasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
