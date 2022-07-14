import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/models/persona';
import { Proyectos } from 'src/app/models/proyectos';
import { FirstServiceService } from 'src/app/servicios/first-service.service';
import { LoginService } from 'src/app/servicios/login.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

   miPorfolio:any;

   editModal :boolean = false;
   deleteModal :boolean = false;
   addModal : boolean = false;

   public editProyecto : Proyectos | undefined;
   public deleteProyecto : Proyectos | undefined;

   public proyectos:Proyectos[]=[];
  constructor(private datosPortfolio : FirstServiceService, private proyectosService:ProyectosService, public loginService : LoginService) { }

  ngOnInit(): void {
   this.getProyectos();

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPorfolio=data;
    });
  }



  /*Metodo para obtener los proyectos de Persona*/ 
  public getProyectos():void{
    this.proyectosService.getProyectos().subscribe({
      next:(Response: Proyectos[] )=>{
        this.proyectos=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode: string, proyecto?:Proyectos){
    const container = document.getElementById('container');
    const button = document.createElement('button');
    button.style.display = "none";
    button.setAttribute('data-toggle', 'modal');

    if(mode == 'add'){
      this.addModal = true;
      button.setAttribute('data-target', '#addProyectoModal')
    }else if(mode == 'edit'){
      this.editModal = true,
      this.editProyecto = proyecto;
      button.setAttribute('data-target', '#editProyectoModal');
    }else if(mode == 'delete'){
      this.deleteModal = true;
      this.deleteProyecto = proyecto;
      button.setAttribute('data-target', '#deleteProyectoModal')
    }
  }

  public onAddProyecto(addFormPr : NgForm){
    document.getElementById('add-proyecto-form')?.click();
    this.proyectosService.addProyectos(addFormPr.value).subscribe({
      next:(response : Proyectos)=>{
        console.log(response)
        this.getProyectos;
        addFormPr.reset()

        window.location.reload();
      }, 
      error(error : HttpErrorResponse){
        alert(error.message);
      }
    })
  }

    public onUpdateProyectos(proyecto:Proyectos){
      this.proyectosService.updateProyectos(proyecto).subscribe({
        next:(response: Proyectos)=>{
          console.log(response)
          this.getProyectos;
          window.location.reload();
        },
        error(error:HttpErrorResponse){
          alert(error.message);
        }
      })
    }

    public onDeleteProyecto(id_proyectos:number):void{
      this.proyectosService.deleteProyecto(id_proyectos).subscribe({
        next:(response : void)=>{
          console.log(response)
          this.getProyectos();
          window.location.reload()
        },
        error(error:HttpErrorResponse){
          alert(error.message);
        }
      })
    }


  

}
