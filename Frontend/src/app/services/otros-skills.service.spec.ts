import { TestBed } from '@angular/core/testing';

import { OtrosSkillsService } from './otros-skills.service';

describe('OtrosSkillsService', () => {
  let service: OtrosSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtrosSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
