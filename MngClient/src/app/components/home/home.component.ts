import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  benefits = [
    'Wide range of consulting services',
    'Experienced and skilled team',
    'Innovative and creative approach',
    'Customized solutions for each client',
    'Commitment to excellent customer service'
  ];

  testimonials = [
    {
      name: 'Sarah Cohen',
      testimonial: 'The company helped us develop a new marketing strategy that resulted in a significant increase in sales. We highly recommend their services!'
    },
    {
      name: 'David Levy',
      testimonial: 'The team worked closely with us to streamline our operations. We are very pleased with the results!'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
