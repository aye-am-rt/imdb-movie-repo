import { TestBed } from '@angular/core/testing';

import { HttpService1Service } from './http-service1.service';

describe('HttpService1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpService1Service = TestBed.get(HttpService1Service);
    expect(service).toBeTruthy();
  });
});
