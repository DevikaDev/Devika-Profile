import { Component } from '@angular/core';
import { IntroComponent } from './pages/intro/intro.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TechnologyComponent } from './pages/technology/technology.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, IntroComponent, NavbarComponent, 
    AboutComponent, ExperienceComponent, ProjectsComponent, 
    ContactComponent, TechnologyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Devika-Profile';

  constructor() {
    window.scrollTo(0, 0);
  }
}
