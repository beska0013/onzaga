import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {

  constructor() { }
 bgBig: boolean;
  bgSmall: boolean;
  ngOnInit(): void {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if ( vw <= 391 ) {
      this.bgBig = false;
      this.bgSmall = true;
    }
   else {
      this.bgBig = true;
      this.bgSmall = false;
    }
  }

}
