import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-navbar',
    imports: [NgOptimizedImage, SearchBarComponent, FontAwesomeModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  faCircleUser = faCircleUser
  screenWidth: number | null = null;
  smallDevice: boolean = false;
  
  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth <= 620) {
        this.smallDevice = true;
      }
    }
  }

}
