import { Component } from '@angular/core';
import { SearchLayoutComponent } from "../../components/search-layout/search-layout.component";
import { GaleryComponent } from "../../components/galery/galery.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchLayoutComponent, GaleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
