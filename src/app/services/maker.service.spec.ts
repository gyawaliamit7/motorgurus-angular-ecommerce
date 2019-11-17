/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MakerService } from './maker.service';

describe('Service: Maker', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MakerService]
    });
  });

  it('should ...', inject([MakerService], (service: MakerService) => {
    expect(service).toBeTruthy();
  }));
});
