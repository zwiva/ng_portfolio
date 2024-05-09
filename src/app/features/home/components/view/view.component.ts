import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit {
  saludo: string = 'hola';
  

  ngOnInit(): void {
    console.log('saludo -> ', this.saludo);

  }
}
