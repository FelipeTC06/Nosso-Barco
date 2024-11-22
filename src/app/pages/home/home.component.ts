import { Component } from '@angular/core';
import { SearchLayoutComponent } from "../../components/search-layout/search-layout.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
