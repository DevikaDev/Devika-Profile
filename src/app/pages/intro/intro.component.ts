import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { navLinks } from '../../constants';

@Component({
  selector: 'app-intro',
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {

  handleDownloadResume(){
    console.log("DOWNLOAD");
    window.open('https://drive.google.com/file/d/10Bh8kCG3QrmPPU_UlBi6CNiBlFVUAWkz/view?usp=sharing', '_blank');
  }
}
