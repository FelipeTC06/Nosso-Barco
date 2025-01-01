import { Component } from '@angular/core';
import { SearchLayoutComponent } from "../../components/search-layout/search-layout.component";
import { GaleryComponent } from "../../components/galery/galery.component";

@Component({
    selector: 'app-home',
    imports: [SearchLayoutComponent, GaleryComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
