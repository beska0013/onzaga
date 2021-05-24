import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  private scrHeight: number;
  private scrWidth: number;
  on = true;
  @HostListener('window:resize', ['$event'])
  getScreenWidth(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    if(this.scrWidth <= 1020) this.on = false;
    if(this.scrWidth >= 1020) this.on = true;
  }

  @HostListener('window:scroll',['$event'])

  onScroll(e: Event): void {
    const header = document.getElementById('header') as HTMLElement;
    const inicio = document.getElementById('inicio') as HTMLElement;
    const strong = document.getElementById('strong') as HTMLElement;
    const x = Math.max(document.documentElement.offsetHeight|| 0, window.pageYOffset || 0)
    const y = window.pageYOffset;


      this.imgHeight = inicio.clientHeight;

   if(y > this.imgHeight){
     console.log('hello');
     header.style.color = '#9B8068';
     strong.classList.add('brown');
     strong.classList.remove('white');
     header.style.backgroundColor = '#FFFFFF';
   }
   else
   {
     header.style.color = '#FFFFFF';
     strong.classList.remove('brown');
     strong.classList.add('white');
     header.style.backgroundColor = 'rgb(255 255 255 / 0%)';
   }
  }

  mobMenuClose(){
    const menu = document.getElementById('mobMenu');
    menu.style.height = '0';
  }
  mobMenuOpen(){
   const menu = document.getElementById('mobMenu');
   menu.style.height = '100vh';
   document.documentElement.scrollTop = 0;
 }
  constructor() {
    this.getScreenWidth();
  }

  imgHeight:number;

   navView(){
     const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
     console.log(vw);
     if(vw <= 1020) this.on = false;
     return this.on
     }

headerFix():void{
     const header = document.getElementById('header') as HTMLElement;
     header.style.position ='initial';
     header.style.color='rgb(155 128 104)';
     this.mobMenuClose();
}


  ngOnInit(): void {



  }

}
