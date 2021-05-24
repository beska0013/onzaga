import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { InicioComponent } from './components/main/inicio/inicio.component';
import { ConocenosComponent } from './components/main/conocenos/conocenos.component';
import { ServiciosComponent } from './components/main/servicios/servicios.component';
import { CertificacionesComponent } from './components/main/certificaciones/certificaciones.component';
import { EmpresasComponent } from './components/main/empresas/empresas.component';
import { ProyectosComponent } from './components/main/proyectos/proyectos.component';
import { ContactoComponent } from './components/main/contacto/contacto.component';
import { CookiePageComponent } from './components/cookie-page/cookie-page.component';
import { ContactoPageComponent } from './components/contacto-page/contacto-page.component';
import { AllMainComponent } from './components/all-main/all-main.component';
import { CookiesLinkComponent } from './components/main/cookies-link/cookies-link.component';



const appRoutes:Routes = [
  {path:'',component:MainComponent},
  {path:'cookies',component:CookiePageComponent},
  {path:'contacts',component:ContactoPageComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    InicioComponent,
    ConocenosComponent,
    ServiciosComponent,
    CertificacionesComponent,
    EmpresasComponent,
    ProyectosComponent,
    ContactoComponent,
    CookiePageComponent,
    ContactoPageComponent,
    AllMainComponent,
    CookiesLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
