import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { LoginService } from 'src/app/servicios/login.service';
import { SwitchServiceService } from 'src/app/servicios/switch-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  
  constructor( private modalSS: SwitchServiceService, private formBuilder:FormBuilder, private loginService:LoginService, private ruta:Router) { 
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(5)]]
      }
    )
  }

  ngOnInit(): void {
    

  }
  get Email(){
    return this.form.get('email');
  } 

  get Password(){
    return this.form.get('password')
  }


  closeModal():void{
    this.modalSS.$modal.emit(false);
  }

  onEnviar(event:Event){
    event.preventDefault;
    this.loginService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("Data:" + JSON.stringify(data));
      this.ruta.navigate(['/'])
    })
    this.closeModal();
  }


 

}
