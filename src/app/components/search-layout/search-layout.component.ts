import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-search-layout',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './search-layout.component.html',
  styleUrl: './search-layout.component.scss'
})
export class SearchLayoutComponent {

}
