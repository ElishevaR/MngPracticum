import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as xlsx from 'xlsx';
import { FormsModule } from '@angular/forms';
import { EmployeeModel } from '../../../models/employeeModel';
import { GenderPipe } from '../../gender.pipe';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDetailsModalComponent } from '../employee-details-modal/employee-details-modal.component';
@Component({
  selector: 'app-all-employees',
  standalone: true,
  imports: [CommonModule,FormsModule,GenderPipe,NgbModule],
  templateUrl: './all-employees.component.html',
  styleUrl: './all-employees.component.scss'
})
export class AllEmployeesComponent {
  public employeesList: EmployeeModel[] = [];
  public filteredEmployeesList: EmployeeModel[] = [];
  public searchText: string = '';

  constructor(private _employeeService: EmployeeService, private router: Router,private modalService: NgbModal) {}

  ngOnInit(): void {
   this.onLoading()
  }
onLoading(){
   this._employeeService.getEmployeesList().subscribe({
      next: (res) => {
        this.employeesList = res.filter((employee) => {
          return employee.isActivate; // רק עובדים פעילים
        });
        this.filteredEmployeesList = [...this.employeesList];}, // בתחילה, הרשימה המסוננת היא זהה לרשימה המלאה
      error: (err) => {
        console.log(err);
      }
    });
}
  // פונקציה לסינון הרשימה בהתאם לטקסט שהוזן בשדה החיפוש
  filterEmployeesList(): void {
    if (!this.searchText) {
      // אם שדה החיפוש ריק, הצג את כל העובדים
      this.filteredEmployeesList = [...this.employeesList];
    } else {
      // אחרת, סנן את הרשימה לפי טקסט החיפוש באחת השדות
      this.filteredEmployeesList = this.employeesList.filter((employee) => {
        return (
          employee.fName.toLowerCase().includes(this.searchText.toLowerCase()) ||
          employee.lName.toLowerCase().includes(this.searchText.toLowerCase()) ||
          employee.identityNumber.toLowerCase().includes(this.searchText.toLowerCase())  
       )
      });
    }
  }

  deleteEmployee(employee: EmployeeModel)  {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
          this._employeeService.ChangeEmployeeToNonActivate(employee.id).subscribe({
            next: (res) => {
                Swal.fire(
                    "Deleted!",
                    "Your file has been deleted.",
                    "success"
                );
                this.filteredEmployeesList = this.filteredEmployeesList.filter(//מכוער!!!
                         (filteredEmployee) => filteredEmployee.id !== employee.id);
            },
            error: (err2) => {
                console.log(err2);
            }
        })
        }
    });
    
}


exportToExcel() {
  // יצירת רשימת העובדים ללא העמודה של התפקידים
  const employeesWithoutRoles = this.filteredEmployeesList.map(employee => {
    const { rolesForEmployee, ...employeeWithoutRoles } = employee;
    return employeeWithoutRoles;
  });

  // יצירת גיליון ב-Excel
  const worksheet = xlsx.utils.json_to_sheet(employeesWithoutRoles);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Employees');
  xlsx.writeFile(workbook, 'employees_data.xlsx');
}
addEmployee(){
  this.router.navigate(['/employees/add-employee']);
}
editEmployee(employee: EmployeeModel){
  
      this.router.navigate(['/employees/edit-employee',employee.id]);
}
openEmployeeDetailsModal(employee: EmployeeModel) {
  const modalRef = this.modalService.open(EmployeeDetailsModalComponent, { size: 'lg' });
  modalRef.componentInstance.employee = employee;
}
}
