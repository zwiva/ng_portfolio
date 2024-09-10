import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import * as XLSX from 'xlsx';
import { read, utils, writeFile } from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

  nuevo: any = { // desde servicio
    "orden": "OT1",
    "estado": "Transferido",
    "fecha_recibido": "2024-08-23",
    "fecha_creacion": "2024-08-23",
    "usuario": "root10",
    "almacen_origen": "Almacén 1",
    "origen_direccion": "General Jofre 100",
    "almacen_destino": "Almacén 2",
    "destino_direccion": "Marin 014",
    "anotaciones": "transferencia 1 test",
    "id_estado": 2,
    "id_origen": 1,
    "id_destino": 2,
    "cantidad": 10,
    "id": 11,
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
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([]);
    const verticalDataA = [
      'Código', //orden
      'Estado', //estado
      'Fecha transferencia', //fecha_transferencia 
      'Fecha creación', //fecha_creacion
      'Ordenado por', //usuario
      'Tienda origen', //almacen_origen
      'Dirección origen', //origen_direccion
      'Tienda destino', //almacen_destino
      'Dirección destino', //destino_direccion
      'Anotaciones', //anotaciones
      '', // espacio a proposito 
      'Articulos' // titulo tabla
    ];
    const verticalDataB = [
      this.nuevo.orden,
      this.nuevo.estado,
      this.nuevo.fecha_recibido,
      this.nuevo.fecha_creacion,
      this.nuevo.usuario,
      this.nuevo.almacen_origen,
      this.nuevo.origen_direccion,
      this.nuevo.almacen_destino,
      this.nuevo.destino_direccion,
      this.nuevo.anotaciones
    ];
    verticalDataA.forEach((value, index) => {
      ws[`A${index + 1}`] = { t: 's', v: value };
    });
    verticalDataB.forEach((value, index) => {
      ws[`B${index + 1}`] = { t: 's', v: value };
    });

    const tableDataArticles = [
      ['id', 'nombre', 'identificacion', 'cantidad'], // Encabezados
    ];

    this.nuevo.productos.forEach((element: any) => {
      console.log('element', element);
      let product = [element.id, element.nombre, element.identificacion, element.cantidad];
      tableDataArticles.push(product)
    });

    console.log('table productos final', tableDataArticles);

    XLSX.utils.sheet_add_aoa(ws, tableDataArticles, { origin: 'A13' }); // inicio de tabla de articulos

    // Crear el libro de trabajo
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, `OT_id_${this.nuevo.id}`); // nombre hoja excel

    // Generar el archivo Excel
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    // Guardar el archivo
    this.saveAsExcelFile(excelBuffer, 'OrdenTransferencia'); // nombre archivo
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    saveAs(data, `${fileName}_id_${this.nuevo.id}.xlsx`);
  }


}
