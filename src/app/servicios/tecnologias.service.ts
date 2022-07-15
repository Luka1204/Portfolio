import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../models/proyectos';
import { Tecnologias } from '../models/tecnologias';

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  private apiServerUrl = 'https://portfolio-luka.herokuapp.com/api';            /*Declaramos una variable donde guardaremos la url del servidor que usaremos para la API e instanciamos el ambiente donde se almacena la url base de la API*/
  constructor( private http:HttpClient) { }

  public getTecnologias():Observable<Tecnologias[]>{        /*Metodo que nos va a traer a todas las tecnologias a travez de una peticion GET*/
      return this.http.get<Tecnologias[]>(`${this.apiServerUrl}/tecnologias`);
  }


  public addTecnologias(tecnologias:Tecnologias):Observable<Tecnologias>{     /*Metodo que nos va a permtir agregar tecnologias a nuestra BD a travez de una peticion POST*/
    return this.http.post<Tecnologias>(`${this.apiServerUrl}/tecnologias`, tecnologias);  /*La funcionalidad de este metodo es igual que a la el update*/
  }

  public updateTecnologias(tecnologias:Tecnologias):Observable<Tecnologias>{ /*Metodo que nos va a permtir actualizar tecnologias a nuestra BD a travez de una peticion PUT*/
    return this.http.put<Tecnologias>(`${this.apiServerUrl}/tecnologias`, tecnologias);
  }

  public deleteTecnologias(id_tecnologias:number):Observable<void>{            /*Metodo que nos va a permtir eliminar tecnologias x ID en nuestra BD a travez de una peticion DELETE*/
   return this.http.delete<void>(`${this.apiServerUrl}/tecnologias/${id_tecnologias}`); 
  }
}
