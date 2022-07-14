import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private apiServerUrl = environment.apiBaseURL; /*Declaramos una variable donde guardaremos la url del servidor que usaremos para la API e instanciamos el ambiente donde se almacena la url base de la API*/
  constructor( private http:HttpClient) { }

  public getProyectos():Observable<Proyectos[]>{        /*Metodo que nos va a traer a todos los proyectos a travez de una peticion GET*/
      return this.http.get<Proyectos[]>(`${this.apiServerUrl}/proyectos`);
  }


  public addProyectos(proyectos:Proyectos):Observable<Proyectos>{     /*Metodo que nos va a permtir agregar proyectos a nuestra BD a travez de una peticion POST*/
    return this.http.post<Proyectos>(`${this.apiServerUrl}/proyectos`, proyectos);  /*La funcionalidad de este metodo es igual que a la el update*/
  }

  public updateProyectos(proyectos:Proyectos):Observable<Proyectos>{ /*Metodo que nos va a permtir actualizar proyectos a nuestra BD a travez de una peticion PUT*/
    return this.http.put<Proyectos>(`${this.apiServerUrl}/proyectos`, proyectos);
  }

  public deleteProyecto(proyectosId:number):Observable<void>{     /*Metodo que nos va a permtir eliminar proyectos x ID en nuestra BD a travez de una peticion DELETE*/
   return this.http.delete<void>(`${this.apiServerUrl}/${proyectosId}`); 
  }

}
