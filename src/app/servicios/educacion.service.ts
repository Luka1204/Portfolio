import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServerUrl=environment.apiBaseURL;

  constructor(private http:HttpClient) { }

  public getEducacion():Observable<Educacion[]>{
      return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion`);
  }

  public addEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(`${this.apiServerUrl}/educacion`, educacion);
  }

  public updateEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServerUrl}/educacion`, educacion);
  }

  public deleteEducacion(educacionId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/${educacionId}`);
  }


}
