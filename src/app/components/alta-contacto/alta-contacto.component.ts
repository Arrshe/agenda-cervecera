import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { CERVEZAS } from 'src/app/mock-cervezas/mock-cervezas';
import Cerveza from 'src/app/model/Cerveza';
import ClaseCerveza from 'src/app/model/Cerveza';
import { CervezasService } from 'src/app/services/cervezas.service';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-alta-contacto',
  templateUrl: './alta-contacto.component.html',
  styleUrls: ['./alta-contacto.component.scss']
})
export class AltaContactoComponent implements OnInit {

  cervezas:Cerveza[]=[]
  cerve!:Cerveza;
  sexos:Array<string> = ['Hombre', 'Mujer']
  
  form:FormGroup;

  constructor(private fb:FormBuilder, private cervezasService:CervezasService, private contactosService:ContactosService) {
    this.form = this.fb.group({
      nombreContacto: ['', Validators.required, Validators.maxLength(30)],
      telefono: ['', Validators.required, Validators.maxLength(9), Validators.minLength(9)],
      fechaNacimiento: ['', Validators.required],
      sexo: ['', Validators.required],
      cervezasFavoritas: this.fb.array(['',[Validators.required, Validators.maxLength(3)]])
    })
  }

  ngOnInit(): void {
    this.getCervezasApi()
  
  }

  onSubmit(){
    if(this.form.valid){
      this.contactosService.agregarContacto(this.form.value);
      console.log('todo ok')
      console.log(this.form.value)
    }else{
      console.log('no valido')
    }
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
