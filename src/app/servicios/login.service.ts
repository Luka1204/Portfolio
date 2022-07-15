import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url='https://portfolio-luka.herokuapp.com/api/login';
  currentUserSubject: BehaviorSubject<any>;
  sesionIniciada : boolean = false;

  constructor(private http:HttpClient) { 
    console.log("El servicio esta corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));

  }

  IniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url,credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.sesionIniciada = true;
      return data;
    }));
  }

  get UsuarioAutenticado(){
    return this.currentUserSubject.value;
  }

}

