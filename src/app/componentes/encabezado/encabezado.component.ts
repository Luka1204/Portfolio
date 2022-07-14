import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { FirstServiceService } from 'src/app/servicios/first-service.service';
import { InterceptorService } from 'src/app/servicios/interceptor.service';
import { LoginService } from 'src/app/servicios/login.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { SwitchServiceService } from 'src/app/servicios/switch-service.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPorfolio:any;
  modalSwitch:boolean = false;

  public persona: Persona  | undefined;
  public editPersona: Persona | undefined;
  constructor(private datosPortfolio : FirstServiceService, private modalSS :SwitchServiceService, private personaService:PersonaService, public loginService : LoginService, public interceptorService: InterceptorService) { }

  ngOnInit(): void {

    this.getPersona();

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio=data;
    });

    this.modalSS.$modal.subscribe((valor) =>{
      this.modalSwitch = valor;
    });

  }

  public recargarPagina(){
    window.location.reload();
  }

  public getPersona():void{
    this.personaService.getPersona().subscribe({
      next:(response : Persona)=>{
        this.persona=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  
  openModal():void{
    this.modalSwitch = true;
  }

 
  

 

}
