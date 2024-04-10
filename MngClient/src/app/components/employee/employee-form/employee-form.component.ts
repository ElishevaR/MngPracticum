
import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CustomValidators } from '../../../validations/custom.validators';
import { RoleService } from '../../../services/role.service';
import { EmployeeService } from '../../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleModel } from '../../../models/role';
import { EmployeeModel } from '../../../models/employeeModel';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgFor],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent implements OnInit {
  addEmployeeForm!: FormGroup;
  rolesList: RoleModel[] = [];
  isLoaded: boolean = false;
  isEdit: boolean = false;
  public byId!: number
  public employee!: EmployeeModel
  constructor(
    private _employeeService: EmployeeService,
    private _roleService: RoleService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _router: Router

  ) { }
  ngOnInit(): void {
    this._roleService.GetRolesLIst().subscribe({
      next: (res) => {
        this.rolesList = res;
        this.route.params.subscribe(param => {
          this.byId = param['id']
        })
        if (this.byId) {
          this.isEdit = true
          this.initaliseEmployee()
        }
        else {
          this.initaliseForm()
        }
        console.log(this.isEdit)
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  initaliseEmployee() {

    this._employeeService.getEmployeeById(this.byId).subscribe({
      next: (res) => {
        this.employee = res
        this.initaliseForm()

      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  initaliseForm() {
    this.addEmployeeForm = this._formBuilder.group({
      fName: [this.employee ? this.employee.fName : '', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lName: [this.employee ? this.employee.lName : '', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      identityNumber: [this.employee ? this.employee.identityNumber : '', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      startDate: [this.employee ? this.employee.startDate : '', [Validators.required, CustomValidators.validateStartDate]],
      birthDate: [this.employee ? this.employee.birthDate : '', Validators.required],
      gender: [this.employee ? this.employee.gender : 0, Validators.required],
      isActivate: [this.employee ? this.employee.isActivate : false, Validators.required],
      rolesForEmployee: this._formBuilder.array([])
    });
    if (this.isEdit) {
      this.addEmployeeForm.addControl('id', this._formBuilder.control(this.employee.id));
    }
    this.rolesList.forEach(role => {
      const employeeFromDb = this.employee?.rolesForEmployee.find(role2 => role2.roleId === role.id)
      const currentDate = new Date().toISOString().split('T')[0];
      const newRoleFormGroup = this._formBuilder.group({
        roleId: [role.id],
        [`isChecked${role.id}`]: [employeeFromDb ? true : false],
        [`startDateRole${role.id}`]: [employeeFromDb ? employeeFromDb.startDate : currentDate, [Validators.required]],
        [`isAdmin${role.id}`]: [employeeFromDb ? employeeFromDb.isAdmin : false, Validators.required]
      });
      (this.addEmployeeForm.get('rolesForEmployee') as FormArray).controls.push(newRoleFormGroup);
    });
    this.isLoaded = true;
  }
  updateRoleFields(roleId: number, event: Event): void {



    const target = event.target as HTMLInputElement;
    const isChecked = target.checked;

    const rolesForEmployeeArray = this.addEmployeeForm.get('rolesForEmployee') as FormArray;
    const roleIndex = rolesForEmployeeArray.controls.findIndex(control => control.value.roleId === roleId);
    if (roleIndex !== -1) {
      const roleGroup = rolesForEmployeeArray.controls[roleIndex] as FormGroup;
      roleGroup.get(`isChecked${roleId}`)?.setValue(isChecked);
      rolesForEmployeeArray.setControl(roleIndex, roleGroup); // Replace the item at the same index with the updated FormGroup
    }


  }
  isCheckedControl(roleId: number): AbstractControl<any> | null {
    const roleGroup = (this.addEmployeeForm.get('rolesForEmployee') as FormArray).controls.find(control => control.value.roleId === roleId);
    if (roleGroup) {
      return roleGroup.get(`isChecked${roleId}`)?.value;
    } else {
      return null;
    }
  }
  updateIsAdmin(roleId: number, event: Event): void {
    const target = event.target as HTMLInputElement;
    const isChecked = target.checked;

    const rolesForEmployeeArray = this.addEmployeeForm.get('rolesForEmployee') as FormArray;
    const roleIndex = rolesForEmployeeArray.controls.findIndex(control => control.value.roleId === roleId);
    if (roleIndex !== -1) {
      const roleGroup = rolesForEmployeeArray.controls[roleIndex] as FormGroup;
      roleGroup.get(`isAdmin${roleId}`)?.setValue(isChecked);
      rolesForEmployeeArray.setControl(roleIndex, roleGroup); // Replace the item at the same index with the updated FormGroup
    }
  }
  updateStartDateRole(roleId: number, event: Event): void {

    const target = event.target as HTMLInputElement;
    const startDate = target.value;




    const rolesForEmployeeArray = this.addEmployeeForm.get('rolesForEmployee') as FormArray;
    const roleIndex = rolesForEmployeeArray.controls.findIndex(control => control.value.roleId === roleId);
    if (roleIndex !== -1) {
      const roleGroup = rolesForEmployeeArray.controls[roleIndex] as FormGroup;
      roleGroup.get(`startDateRole${roleId}`)?.setValue(startDate);
      rolesForEmployeeArray.setControl(roleIndex, roleGroup);
    }

  }
  submit() {
    const rolesForEmployeeArray = this.addEmployeeForm.value.rolesForEmployee;
    const selectedRoles = rolesForEmployeeArray
      .filter((role: any) => {
        // מציאת המפתח המכיל את התחילית "isChecked" ובדיקה אם הוא מסומן
        const isCheckedKey = Object.keys(role).find(key => key.startsWith('isChecked'));
        return isCheckedKey && role[isCheckedKey];
      })
      .map((role: any) => {
        const roleKeys = Object.keys(role);
        const updatedRole = roleKeys.reduce((acc, key) => {
          if (key.startsWith('startDateRole')) {
            const newKey = key.replace(/Role\d+/g, '');
            acc[newKey] = role[key];
          } else if (key.startsWith('isAdmin')) {
            const newKey = key.replace(/\d+/g, '');
            acc[newKey] = role[key];
          } else if (!key.startsWith('isChecked')) {
            acc[key] = role[key];
          }
          return acc;
        }, {} as any);
        return updatedRole;
      });
    if (this.isEdit) {
      this._employeeService.updateEmployee({ ...this.addEmployeeForm.value, rolesForEmployee: selectedRoles }).subscribe({
        next: (res) => {
          Swal.fire({
            title: 'Thank you!',
            text: 'The employee was successfully updated!',
            icon: 'success'
          });
          this._router.navigate(['employees']);
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
    else {
      this._employeeService.register({ ...this.addEmployeeForm.value, rolesForEmployee: selectedRoles }).subscribe({
        next: (res) => {
          Swal.fire({
            title: 'Thank you!',
            text: 'The employee was successfully added!',
            icon: 'success'
          });
          this._router.navigate(['employees']);
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }

}