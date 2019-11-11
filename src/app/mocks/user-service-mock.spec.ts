import { TestBed } from '@angular/core/testing';

import { UserServiceMock } from './user-service-mock';

describe('UserServiceMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserServiceMock = TestBed.get(UserServiceMock);
    expect(service).toBeTruthy();
  });
});
