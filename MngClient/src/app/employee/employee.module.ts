import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllEmployeesComponent } from '../components/employee/all-employees/all-employees.component';
import { FormsModule } from '@angular/forms';
import { EmployeesDiagramsComponent } from '../components/employee/employees-diagrams/employees-diagrams.component';
import { AuthGuard } from '../auth.guard';
import { EmployeeFormComponent } from '../components/employee/employee-form/employee-form.component';
const routes: Routes = [
  { path: '', redirectTo: 'employee-list', pathMatch: 'full' },
  { path: 'employee-list', component: AllEmployeesComponent },
  { path: 'add-employee', component: EmployeeFormComponent },
  { path: 'edit-employee/:id', component: EmployeeFormComponent },
 // { path: 'employee-diagrams', component: EmployeesDiagramsComponent },


];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class EmployeeModule { }
