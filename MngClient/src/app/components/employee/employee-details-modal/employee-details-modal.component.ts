import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeModel } from '../../../models/employeeModel';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-employee-details-modal',
  standalone: true,
  imports: [NgbModule,DatePipe,NgbModule ,NgFor],
  templateUrl: './employee-details-modal.component.html',
  styleUrl: './employee-details-modal.component.scss'
})
export class EmployeeDetailsModalComponent {
    @Input() employee!: EmployeeModel; // משתנה המקבל את פרטי העובד מהקומפוננטה הקוראת
  
    constructor(public activeModal: NgbActiveModal) {
    }
  }

