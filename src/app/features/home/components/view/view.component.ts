import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit {
  saludo: string = 'hola';

  constructor(
    private router: Router
  ){}


  ngOnInit(): void {
    console.log('saludo -> ', this.saludo);
  }

  goToSamples() {
    this.router.navigate(['/samples'])
  }

  goToProjects() {
    this.router.navigate(['/projects'])
  }
}
