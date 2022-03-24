import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosSkillsComponent } from './otros-skills.component';

describe('OtrosSkillsComponent', () => {
  let component: OtrosSkillsComponent;
  let fixture: ComponentFixture<OtrosSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
