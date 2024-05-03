import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit {
  saludo: string = 'hola';
  

  ngOnInit(): void {
    console.log('saludo -> ', this.saludo);

  }
}
