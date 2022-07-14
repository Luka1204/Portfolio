import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/models/persona';
import { Tecnologias } from 'src/app/models/tecnologias';
import { FirstServiceService } from 'src/app/servicios/first-service.service';
import { LoginService } from 'src/app/servicios/login.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TecnologiasService } from 'src/app/servicios/tecnologias.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  /* miPorfolio:any;*/
  public persona: Persona  | undefined;

   public tecnologias: Tecnologias[]=[];
   modalAdd:boolean = false;
   modalDelete:boolean = false;
   modalEdit:boolean = false;

   public editTecnologia:Tecnologias  |   undefined;
   public deleteTecnologia:Tecnologias | undefined;

  constructor(private datosPortfolio : FirstServiceService, private tecnologiasService:TecnologiasService,  private personaService:PersonaService, public loginService : LoginService) { }

  ngOnInit(): void {
    this.getPersona();

    this.getTecnologias();
  /*  this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPorfolio=data;
    });*/
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

   /*Metodo para obtener los proyectos de Persona*/ 
   public getTecnologias():void{
    this.tecnologiasService.getTecnologias().subscribe({
      next:(Response: Tecnologias[] )=>{
        this.tecnologias=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

    public onOpenModal(mode:String, tecnologia?:Tecnologias){
    const container=document.getElementById('container');
    const button = document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode == 'add'){
      this.modalAdd = true;
      button.setAttribute('data-target','#addTecnologia')
    }else if(mode == 'delete'){
      this.modalDelete=true;
      this.deleteTecnologia=tecnologia;
      button.setAttribute('data-target','#deleteTecnologia')

    }else if(mode == 'edit'){
      this.modalEdit = true;
      this.editTecnologia=tecnologia;
      button.setAttribute('data-target','#editTecnologia')

    }

    container?.appendChild(button);
    button.click();
  }

  public onAddTecnologia(addForm : NgForm){
    document.getElementById('add-tecnologia-form')?.click();
    this.tecnologiasService.addTecnologias(addForm.value).subscribe({
      next:(response: Tecnologias )=>{
        console.log(response)
        this.getTecnologias;
        addForm.resetForm();
        window.location.reload();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    });
  }

  public onUpdateTecnologia(tecnologia:Tecnologias){
    this.editTecnologia=tecnologia;
    this.tecnologiasService.updateTecnologias(tecnologia).subscribe({
      next:(response: Tecnologias )=>{
        console.log(response)
        this.getTecnologias;
        window.location.reload();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteTecnologia(id_tecnologias:number):void{
    this.tecnologiasService.deleteTecnologias(id_tecnologias).subscribe({
      next:(response: void )=>{
        console.log(response)
        this.getTecnologias;
        window.location.reload();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }




}
