import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { Experiencia } from 'src/app/models/experiencia';
import { Persona } from 'src/app/models/persona';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { FirstServiceService } from 'src/app/servicios/first-service.service';
import { LoginService } from 'src/app/servicios/login.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

     miPorfolio:any;
  public persona: Persona  | undefined;
  	  /*Modales Educacion*/
      modalAddEd:boolean = false;
      modalEditEd:boolean = false;
      modalDeleteEd:boolean = false;
      /*Modales Experiencia*/
      modalAddEx:boolean = false;
      modalEditEx:boolean = false;
      modalDeleteEx:boolean = false;


     public educaciones:Educacion[]=[];
     public experiencias:Experiencia[]=[];

     public editExperiencias:Experiencia | undefined;
     public deleteExperiencias:Experiencia | undefined;

     public editEducacion:Educacion | undefined;
     public deleteEducacion:Educacion | undefined;


  constructor(private datosPortfolio : FirstServiceService, private educacionService:EducacionService, private experienciaService:ExperienciaService,  private personaService:PersonaService, public loginService : LoginService) { }

  ngOnInit(): void {
    this.getEducaciones();
    this.getExperiencias();
    this.getPersona();

    this.datosPortfolio.obtenerDatos().subscribe(data => {
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
  /*Metodo para obtener las educaciones de Persona*/ 
  public getEducaciones():void{
    this.educacionService.getEducacion().subscribe({
      next:(Response: Educacion[] )=>{
        this.educaciones=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  /*Metodo para obtener las experiencias de Persona*/ 

  public getExperiencias():void{
    this.experienciaService.getExperiencia().subscribe({
      next:(Response: Experiencia[] )=>{
        this.experiencias=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onOpenModalEx(mode:string, experiencia?:Experiencia){
    const container = document.getElementById('container');
    const button = document.createElement('button');
    button.style.display = "none";
    button.setAttribute('data-toggle', 'modal');
    if(mode == 'add'){
      this.modalAddEx = true;
      button.setAttribute('data-target', '#addExperiencia');
    }else if(mode == 'edit'){
      this.modalEditEx = true;
      this.editExperiencias = experiencia;
      button.setAttribute('data-target', '#editExperiencia');
    }else if(mode =='delete'){
      this.modalDeleteEx = true;
      this.deleteExperiencias = experiencia;
      button.setAttribute('data-target', '#deleteExperiencia');
    }
    container?.appendChild(button);
    button.click();
  }

  public onOpenModalEd(mode:string, educacion?:Educacion){
    const container = document.getElementById('container');
    const button = document.createElement('button');

    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if(mode == 'add'){
      this.modalAddEd = true;
      button.setAttribute('data-target', '#addEducacion');
    }else if(mode == 'edit'){
      this.modalEditEd=true;
      this.editEducacion = educacion;
      button.setAttribute('data-target', '#editEducacion');
    
    }else if(mode == 'delete'){
      this.modalDeleteEd=true;
      this.deleteEducacion = educacion;
      button.setAttribute('data-target', '#deleteEducacion');
    }
    container?.appendChild(button);
    button.click();
  }

  /*METODOS PARA AGREGAR/MODIFICAR/ELIMINAR EXPERIENCIA*/ 

  public onAddExperiencia(addForm : NgForm){
    document.getElementById('add-experiencia-form')?.click();
    this.experienciaService.addExperiencia(addForm.value).subscribe({
      next:(response: Experiencia )=>{
        console.log(response)
        this.getExperiencias;
        addForm.resetForm();
        window.location.reload();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    });
  }

  public onUpdateExperiencia(experiencia : Experiencia){
    this.editExperiencias = experiencia;
    this.experienciaService.updateExperiencia(experiencia).subscribe({
      next:(response:Experiencia)=>{
        console.log(response);
        this.getExperiencias;
        window.location.reload();
      }
    })

  }

  public onDeleteExperiencia( id_experiencia:number):void{
    this.experienciaService.deleteExperiencia(id_experiencia).subscribe({
      next:(response:void)=>{
        console.log(response);
        this.getExperiencias;
        window.location.reload();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  /*METODOS PARA AGREGAR/MODIFICAR/ELIMINAR EDUCACION*/
  public onAddEducacion(addForm:NgForm){
    document.getElementById('add-educacion-form')?.click();
    this.educacionService.addEducacion(addForm.value).subscribe({
      next:(response: Educacion )=>{
        console.log(response)
        this.getEducaciones;
        addForm.resetForm();
        window.location.reload();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    });
  } 

  public onUpdateEducacion(educacion:Educacion){
    this.editEducacion = educacion;
    this.educacionService.updateEducacion(educacion).subscribe({
      next:(response: Educacion )=>{
        console.log(response)
        this.getEducaciones;
        window.location.reload();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    });
  }
  
    public onDeleteEducacion(id_educacion:number):void{
    this.educacionService.deleteEducacion(id_educacion).subscribe({
      next:(response:void)=>{
        console.log(response);
        this.getEducaciones;
        window.location.reload();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }




}
