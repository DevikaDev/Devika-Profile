import { Component } from '@angular/core';
import { technologies } from '../../constants';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-technology',
  imports: [CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent {
  techArray=technologies;

}
