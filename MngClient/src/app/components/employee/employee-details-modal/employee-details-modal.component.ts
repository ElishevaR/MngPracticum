import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeModel } from '../../../models/employeeModel';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { RoleService } from '../../../services/role.service';
import { RoleModel } from '../../../models/role';
import { HideIfEmptyDirective } from '../../../hide-if-empty.directive';

@Component({
  selector: 'app-employee-details-modal',
  standalone: true,
  imports: [NgbModule,DatePipe,NgbModule ,NgFor, NgIf,HideIfEmptyDirective],
  templateUrl: './employee-details-modal.component.html',
  styleUrl: './employee-details-modal.component.scss'
})
export class EmployeeDetailsModalComponent implements OnInit{
    @Input() employee!: EmployeeModel; // משתנה המקבל את פרטי העובד מהקומפוננטה הקוראת
    rolesList: RoleModel[] = [];
  
    constructor(public activeModal: NgbActiveModal, private _roleService:RoleService) {
    }
    ngOnInit(): void {
      this._roleService.GetRolesLIst().subscribe({
        next: (res) => {
          this.rolesList = res;
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
      getRoleDescriptionById(id: number): string | undefined {
      const role = this.rolesList.find(role => role.id === id);
      return role?.description;
    }

  }

