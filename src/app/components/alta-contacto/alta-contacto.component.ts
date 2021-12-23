import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
//import { CERVEZAS } from 'src/app/mock-cervezas/mock-cervezas';
import Cerveza from 'src/app/model/Cerveza';
import ClaseCerveza from 'src/app/model/Cerveza';
import { CervezasService } from 'src/app/services/cervezas.service';

@Component({
  selector: 'app-alta-contacto',
  templateUrl: './alta-contacto.component.html',
  styleUrls: ['./alta-contacto.component.scss']
})
export class AltaContactoComponent implements OnInit {

  
  //arrayCervezasApi: any;
  
  cervezas:Cerveza[]=[]
  cerve!:Cerveza;
  sexos:Array<string> = ['Hombre', 'Mujer']
  //cervezas:Cerveza[]=CERVEZAS;
  form:FormGroup;

  constructor(private fb:FormBuilder, private cervezasService:CervezasService) {
    this.form = this.fb.group({
      nombreContacto: [''],
      telefono: [''],
      fechaNacimiento: [''],
      sexo: [''],
      cervezasFavoritas: this.fb.array([])
    })
  }

  ngOnInit(): void {
    this.getCervezasApi()
    /*
    setTimeout(()=>{
      console.log(this.arrayCervezasApi)
    },1000)*/

    

    
  }

  verSexo(){
    console.log(this.form)
  }

  onCheckBoxChange(e:any){
    const cervezasFavoritas: FormArray = this.form.get('cervezasFavoritas') as FormArray;

    if (e.target.checked){
      cervezasFavoritas.push(new FormControl(e.target.value))
    }else{
      let i: number = 0;
      cervezasFavoritas.controls.forEach((item) => {
        if(item.value == e.target.value){
          cervezasFavoritas.removeAt(i);
          return;
        }
        i++
      });
    }
  }

  getCervezasApi():void{
    this.cervezasService.getCervezasApi().subscribe(data=>
      //data es un array de objetos
      data.forEach((cerveza: any,i: any) => {
        this.cerve = new ClaseCerveza(
          cerveza.name,cerveza.description,cerveza.image_url
        )
        this.cervezas.push(this.cerve)
        
        console.log(this.cervezas[i])
      }))
      
  }

  

}
