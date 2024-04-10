import { Component } from '@angular/core';
import { AllEmployeesComponent } from '../employee/all-employees/all-employees.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [AllEmployeesComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

}
