import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit  {

  constructor() { }
  range: number;

  imgWidth: number;
  on = true;
  servisioImg =
  [
  {
    img: './assets/img/Onzaga_previos_dosier--20.png',
    smallImg: './assets/img/Onzaga_previos_dosier-2-small.png',
    title: 'OBRA CIVIL',
    text: 'Materia prima de alta calidad con gran pureza química y mineralógica apta para numerosas aplicaciones.\n' +
      'El grueso de la extracción actual está destinado para su inclusión en la fabricación de hormigones,\n' +
      'mezclas bituminosas y a su utilización en firmes.'
  },
    {
      img: './assets/img/Onzaga_previos_dosier-2.png',
      smallImg: './assets/img/Onzaga_previos_dosier-1-small.png',
      title: 'EXTRACCIÓN MINERA',
      text: 'Materia prima de alta calidad con gran pureza química y mineralógica apta para numerosas aplicaciones.\n' +
        'El grueso de la extracción actual está destinado para su inclusión en la fabricación de hormigones,\n' +
        'mezclas bituminosas y a su utilización en firmes.'
    },
    {
      img: './assets/img/Onzaga_previos_dosier--40.jpg',
      smallImg: './assets/img/Onzaga_previos_dosier-3-small.jpg',
      title: 'mantenimiento',
      text: 'Materia prima de alta calidad con gran pureza química y mineralógica apta para numerosas aplicaciones.\n' +
        'El grueso de la extracción actual está destinado para su inclusión en la fabricación de hormigones,\n' +
        'mezclas bituminosas y a su utilización en firmes.'
    },
];
  rangeCount(): number{
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if (vw >= 768) {this.range = 18; }
    if (vw <= 768) {this.range = 8; }
    // console.log(this.range);
    return this.range;
  }
  scrollNext(): void{
    const carouselWindow = document.getElementById('carouselWindow');
    for ( let i = 0; i < carouselWindow.children.length; i++){
      this.imgWidth = carouselWindow.children[i].clientWidth;
    }
    carouselWindow.scrollLeft += this.imgWidth + this.rangeCount();
    this.clickEvent(event);
  }

  scrollPrevious(): void{
  this.clickEvent(event);
  const carouselWindow = document.getElementById('carouselWindow') as HTMLElement;
  carouselWindow.scrollLeft -= this.imgWidth + this.rangeCount();
  }

  pointsView(): boolean{
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if (vw <= 768) { this.on = false; }
    if (vw >= 768) { this.on = true; }
    return this.on;
  }
  scrollWhithPoints(e): void{
    // console.log(e);
    const carouselWindow = document.getElementById('carouselWindow') as HTMLElement;
    const span = document.querySelector('.scrollPoints') as HTMLElement;
    const points = span.children;

    e.target.classList.toggle('brownBg');
    for (let i = 0; i < points.length; i++) {
      this.imgWidth = carouselWindow.children[i].clientWidth;
      if (e.target !== points[i]) { points[i].classList.remove('brownBg'); }
      if (e.target === points[0]) { carouselWindow.scrollLeft = 0; }
      if (e.target === points[1]) { carouselWindow.scrollLeft = this.imgWidth + this.rangeCount(); }
      if (e.target === points[2]) { carouselWindow.scrollLeft = (this.imgWidth + this.rangeCount()) * 2; }
    }
  }





  ngOnInit(): void {
    this.pointsView();
  }



  clickEvent(event): void {
    event.preventDefault();
    event.stopPropagation();
    // console.log(event);
  }
}
