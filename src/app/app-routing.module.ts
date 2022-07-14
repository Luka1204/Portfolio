import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:"login", component: LoginComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
