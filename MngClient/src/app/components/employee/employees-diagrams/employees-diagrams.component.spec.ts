import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDiagramsComponent } from './employees-diagrams.component';

describe('EmployeesDiagramsComponent', () => {
  let component: EmployeesDiagramsComponent;
  let fixture: ComponentFixture<EmployeesDiagramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesDiagramsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeesDiagramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
