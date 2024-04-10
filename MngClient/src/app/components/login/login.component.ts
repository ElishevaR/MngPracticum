import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private _userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      identityNumber: new FormControl('', [Validators.required])
    });
  }

  save(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this._userService.login(loginData.userName, loginData.identityNumber).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/employees']);
        },
        error: (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login failed! Please try again.',
          });
        }
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Validation Error',
        text: 'Please fill all the fields correctly!',
      });
    }
  }
}
