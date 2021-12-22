import { Component, OnInit } from '@angular/core';
import Cerveza from 'src/app/model/Cerveza';
import { CervezasService } from 'src/app/services/cervezas.service';

@Component({
  selector: 'app-alta-contacto',
  templateUrl: './alta-contacto.component.html',
  styleUrls: ['./alta-contacto.component.scss']
})
export class AltaContactoComponent implements OnInit {

  arrayCervezasApi: any;
  cerveza!: Cerveza;
  arrayCervezas:Cerveza[]=[]
  constructor(private cervezasService:CervezasService) { }

  ngOnInit(): void {
    this.getCervezasApi()
    setTimeout(()=>{
      console.log(this.arrayCervezasApi)
    },1000)
    
  }

  getCervezasApi():void{
    this.cervezasService.getCervezasApi().subscribe(data=>{
      
      //data es un array de objetos
      this.arrayCervezasApi = data
      console.log(data)
    })
  }

  

}
