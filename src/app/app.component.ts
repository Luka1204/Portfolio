import { Component } from '@angular/core';
import { FirstServiceService } from 'src/app/servicios/first-service.service';
import {Router} from '@angular/router';
import { SwitchServiceService } from './servicios/switch-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalSwitch:boolean = false;

  title = 'Portfolio';
    miPorfolio:any;
  constructor(private datosPortfolio : FirstServiceService, private router:Router, private modalSS :SwitchServiceService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio=data;

      this.modalSS.$modal.subscribe((valor) =>{
        this.modalSwitch = valor;
      })
    
    });

    
  }

  openModal():void{
    this.modalSwitch = true;
  }

 

}
