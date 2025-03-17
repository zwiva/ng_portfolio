import { Component, OnInit, Pipe } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { NgFor } from '@angular/common';
import { SafeUrlPipe } from '../../../../shared/pipes/safeUrl/safe-url.pipe';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, NgFor, SafeUrlPipe],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit {
  samples: any = [
    {
      "title": "Informe descargable uso plataforma",
      "iframeSrc": "https://drive.google.com/file/d/1JjGT8M6FzzK45WqtT3tMvLyTRTQVOP0O/preview",
      "description": "Desarrollo front para sección de descarga de informe que resume uso de plataforma. Sin librería para gráfico de barras.",
      "features": [
        "Gráfico svg con JS.",
        "Implementación de llamados a api interna.",
        "Descarga de archivo con extensión pdf (jspdf-html2canvas). ",
        "Cantidad ilimitada de páginas e identificación de recursos no completados."
      ],
      "year": 2024,
      "tech": "React"
    },
    {
      "title": "Webinars creator / Creador de webinars",
      "iframeSrc": "https://drive.google.com/file/d/1IIgDDSh6-c_Lfk7_2qsw6jbIMax27LXq/preview",
      "description": "Desarrollo front para sección para agendamiento y envío de invitaciones personalizadas a webinars (reuniones con grupos grandes de potenciales clientes) con Angular.",
      "features": [
        "Implementación de llamados a api interna",
        "Formularios con regex para identificar emails y rechazar (e indicar) incorrectos",
        "Previsualización mensaje"
      ],
      "year": 2023,
      "tech": "Angular"
    },
    {
      "title": "Generador informes automatizados pdf",
      "iframeSrc": "https://drive.google.com/file/d/1RabPu5KmlFgm7ux1179hyLeY9x6iXkxs/preview",
      "description": "Desarrollo frontend para la creación y descarga en pdf de informes con desempeño anual de escuelas. Se crean tablas y gráficos (torta, barras y bloxplot) sin librerías.",
      "features": [
        "Implementación de llamados a api interna",
        "Formularios con regex para identificar emails y rechazar (e indicar) incorrectos",
        "Previsualización mensaje"
      ],
      "year": 2022,
      "tech": "Angular"
    },
    {
      "title": "Seguimiento escuelas",
      "iframeSrc": "https://drive.google.com/file/d/14wokzwJEVzUvxLLnWJo5QrsfdXDiHTrp/preview",
      "description": "Desarrollo front para la creación de sección de seguimiento de escuelas.",
      "features": [
        "Implementación de llamados a api interna",
        "Subsección para ver tabla con listas de escuelas.",
        "Subsección para registrar interacciones establecidas con usuarios administrativos.",
        "Subsección para registrar interacciones establecidas con usuarios docentes."
      ],
      "year": "2021 - 2022",
      "tech": "Angular"
    },
    {
      "title": "Mensajes a través de plataforma",
      "iframeSrc": "https://drive.google.com/file/d/1DANfauxgDKKJGH0paXmbeYIlQadBzyMb/preview",
      "description": "Desarrollo front de sección para la creación de mensajes de alerta en toda la plataforma. Variables entre tipo de usuario y nivel al que pertenecen.",
      "features": [
        "Implementación de llamados a api interna.",
        "Subsección con formulario para crear mensaje (asigna duración y perfil al que va dirigido).",
        "Subsección para visualizar mensajes y realizar acción de desactivación."
      ],
      "year": 2023,
      "tech": "Angular"
    },
    {
      "title": "Creación usuarios demo",
      "iframeSrc": "https://drive.google.com/file/d/19yAId5ds4_UJTR00w0iwU2PYOSvnPqJn/preview",
      "description": "Desarrollo front para la creación de usuarios.",
      "features": [
        "Implementación de llamados a api interna",
        "Subsección con formulario para crear usuarios.",
        "Subsección para visualizar tabla de usuarios creados."
      ],
      "year": 2021,
      "tech": "Angular"
    }
  ]

  ngOnInit() {
  }

}
