import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { navLinks } from '../../constants';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navLinksArray=navLinks;
  active:any = null;

  constructor(){
    window.scrollTo(0, 0);
  }

  setActive(value: any){
    console.log("ACTIVE CHECK", value)
    this.active = value;
    if(this.active == ''){
      window.scrollTo(0, 0);
    }
  }

  ngOnDestroy(){
    this.active = null;
  }

}
