import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaMiComponent } from './componentes/acerca-mi/acerca-mi.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ResumenComponent } from './componentes/resumen/resumen.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaMiComponent,
    SkillsComponent,
    ResumenComponent,
    PortfolioComponent,
    ContactoComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "login", component: LoginComponent }
    ]),
    HttpClientModule, // cargamos el módulo en el array de imports
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
