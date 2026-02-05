import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentineQuestion } from './valentine-question';

describe('ValentineQuestion', () => {
  let component: ValentineQuestion;
  let fixture: ComponentFixture<ValentineQuestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValentineQuestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValentineQuestion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
