import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // טעינת הקומפוננטה: מציגה את האזהרה
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to leave now?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, leave!',
      cancelButtonText: 'No, stay'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('User clicked "Yes, leave!"');
          localStorage.removeItem('token');
          this.router.navigate(['/login']);

      } else {
        console.log('User clicked "No, stay"');
        this.router.navigate(['/employees']);
      }
    });
  }
}
