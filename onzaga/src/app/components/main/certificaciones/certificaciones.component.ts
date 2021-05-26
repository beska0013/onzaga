import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss']
})
export class CertificacionesComponent implements OnInit {

  constructor() { }

  cards = [
    {
        logo: './assets/img/ISO_9001_COL_ESP-removebg-preview.png',
        header: 'Sistema  de calidad',
        main: 'Conforme con la norma',
        footer: 'ISO 9001',

    },
    {
      logo: './assets/img/ISO_14001_COL_ESP-removebg-preview.png',
      header: 'Sistema  medioambiental',
      main: 'Conforme con la norma',
      footer: 'ISO 14001',
    },
    {
      logo: './assets/img/sistema_gestion-removebg-preview.png',
      header: 'Sistema  de Gestión',
      main: 'Conforme con la norma',
      footer: 'ISO 9001 / ISO 14001 ISO 45001',
    },
    {
      logo: './assets/img/Mask_Group_6-removebg-preview.png',
      header: 'Sistema medioambiental',
      main: 'Conforme con la norma',
      footer: 'ISO 14001:2018',
    },
    {
      logo: './assets/img/Group_746-removebg-preview.png',
      header: 'Reducción de emisiones',
      main: 'Compromiso con el Medio Ambiente',
      footer: '',
    }

  ];





  ngOnInit(): void {
  }

}
