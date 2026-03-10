import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTable } from './emp-table';

describe('EmpTable', () => {
  let component: EmpTable;
  let fixture: ComponentFixture<EmpTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
