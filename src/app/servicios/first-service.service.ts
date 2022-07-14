import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
  constructor(private http:HttpClient, private router: Router) { }
  
  url="http://localhost:8080/api/";
  obtenerDatos():Observable<any>{
    return this.http.get<any>(this.url + "persona/1");
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
