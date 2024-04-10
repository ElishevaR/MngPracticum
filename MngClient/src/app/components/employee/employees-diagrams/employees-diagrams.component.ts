import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-employees-diagrams',
  standalone: true,
  imports: [],
  templateUrl: './employees-diagrams.component.html',
  styleUrl: './employees-diagrams.component.scss'
})
export class EmployeesDiagramsComponent implements OnInit {

  ngOnInit(): void {
    this.createPieChart();
  }

  createPieChart(): void {
    const canvas = document.getElementById('pieChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Label 1', 'Label 2', 'Label 3'],
          datasets: [{
            data: [10, 20, 30], // נתוני הדיאגרמה
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)'
            ]
          }]
        },
        options: {
          responsive: true
        }
      });
    } else {
      console.error('Canvas context is null!');
    }
  }

}
