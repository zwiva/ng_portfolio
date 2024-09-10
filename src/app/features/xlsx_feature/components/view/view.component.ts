import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

  nuevo: any = {
    "id": 11,
    "orden": "OT1",
    "usuario": "root10",
    "fecha_creacion": "2024-08-23",
    "fecha_recibido": "2024-08-23",
    "cantidad": 10,
    "anotaciones": "transferencia 1 test",
    "estado": "Transferido",
    "almacen_origen": "Almacén 1",
    "origen_direccion": "General Jofre 100",
    "almacen_destino": "Almacén 2",
    "destino_direccion": "Marin 014",
    "id_estado": 2,
    "id_origen": 1,
    "id_destino": 2,
    "productos": [
      {
        "cantidad": 5,
        "nombre": "SixPack Coca Cola Lata",
        "id": 1,
        "identificacion": "FOOBEBCOCASPLA"
      },
      {
        "cantidad": 5,
        "nombre": "SixPack Pepsi Lata",
        "id": 2,
        "identificacion": "FOOBEBCOCASPLA"
      }
    ]
  }

  crearxlsx() {
    console.log('nuevo', this.nuevo);

  }









}
