import { TestBed } from '@angular/core/testing';

import { GetmovielistService } from './getmovielist.service';

describe('GetmovielistService', () => {
  let service: GetmovielistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetmovielistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
