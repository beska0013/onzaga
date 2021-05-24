import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-page',
  templateUrl: './cookie-page.component.html',
  styleUrls: ['./cookie-page.component.scss']
})
export class CookiePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const header = document.getElementById('header');
    const strong = header.children[0].children[0].children[0] as HTMLElement;
    console.log(header);
    header.style.position='initial';
    header.style.color='rgb(155 128 104)';
    strong.classList.remove('white');
    strong.classList.add('brown');
    strong.style.color='rgb(155 128 104)';
    console.log(header.children[0].children[0].children);

  }

}
