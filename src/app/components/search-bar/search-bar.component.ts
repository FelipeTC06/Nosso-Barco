import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  faSearch = faSearch
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
