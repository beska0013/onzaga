import {Component, OnInit} from '@angular/core';





@Component({
  selector: 'app-contacto-page',
  templateUrl: './contacto-page.component.html',
  styleUrls: ['./contacto-page.component.scss']
})



export class ContactoPageComponent implements OnInit {


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
