/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BikesService } from './bikes.service';

describe('Service: Bikes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BikesService]
    });
  });

  it('should ...', inject([BikesService], (service: BikesService) => {
    expect(service).toBeTruthy();
  }));
});
