import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullName } from './full-name';

describe('FullName', () => {
  let component: FullName;
  let fixture: ComponentFixture<FullName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullName);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
