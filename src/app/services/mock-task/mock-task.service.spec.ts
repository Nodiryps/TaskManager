import { TestBed } from '@angular/core/testing';

import { MockTaskService } from './mock-task.service';

describe('MockTaskService', () => {
  let service: MockTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
