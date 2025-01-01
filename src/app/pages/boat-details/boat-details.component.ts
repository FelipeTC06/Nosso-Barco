import { Component } from '@angular/core';
import { SearchLayoutComponent } from "../../components/search-layout/search-layout.component";

@Component({
    selector: 'app-boat-details',
    imports: [SearchLayoutComponent],
    templateUrl: './boat-details.component.html',
    styleUrl: './boat-details.component.scss'
})
export class BoatDetailsComponent {
  public item = {
      id: 1,
      title: 'Boat title',
      src: 'images/fot-exemplo-lancha-1.jpg',
      location: 'Angra dos Reis, Rj',
      maxNumberOnBoard: '4',
      period: '2 - 7 de dez',
      ammout: '290,00',
      description: '',
      ownerTitle: 'Pedrinho',
      ownerDescrition: '2 anos alugando barcos',
    }
  
}
