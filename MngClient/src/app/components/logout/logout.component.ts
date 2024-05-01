import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; // or 'sweetalert2'

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  logout() {
    // ביצוע פעולת ה-Logout
    console.log('ביצוע Logout...');
    localStorage.removeItem('token'); // הסר אסימון התחברות
    this.router.navigate(['/login']); // נתק לכתובת התחברות
  }

  cancel() {
    // ביטול Logout
    console.log('ביטול Logout');
    this.router.navigate(['/employees']); // חזור לדף העובדים
  }
 }