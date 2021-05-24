import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies-link',
  templateUrl: './cookies-link.component.html',
  styleUrls: ['./cookies-link.component.scss']
})
export class CookiesLinkComponent implements OnInit {

  constructor() { }
  on = true;
  cookiesView(){
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    // console.log(vw);
    if(vw <= 1020) this.on = false;
    return this.on
  }
  ngOnInit(): void {
  }

}
