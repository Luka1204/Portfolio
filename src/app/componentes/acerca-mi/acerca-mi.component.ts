import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { FirstServiceService } from 'src/app/servicios/first-service.service';
import { LoginService } from 'src/app/servicios/login.service';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-acerca-mi',
  templateUrl: './acerca-mi.component.html',
  styleUrls: ['./acerca-mi.component.css']
})
export class AcercaMiComponent implements OnInit {
  miPorfolio:any;
  modalEdit:boolean=false;
  public persona: Persona  | undefined;
  public editPersona: Persona | undefined;
  constructor(private datosPortfolio : FirstServiceService, private personaService:PersonaService, public loginService : LoginService) { }

  ngOnInit(): void {
    this.getPersona();

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio=data;
    });


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

  public onOpenModal(mode:String, persona?:Persona){
    const container=document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode == 'edit'){
      this.modalEdit = true;
      this.editPersona=persona;
      button.setAttribute('data-target','#editDatos')
    }
  }

  public onUpdatePersona(persona : Persona){
    this.editPersona = persona;
    this.personaService.updatePersona(persona).subscribe({
        next:(response : Persona)=>{
          console.log(response);
          this.getPersona();
          window.location.reload();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
    })
  }

}



  



