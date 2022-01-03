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
  sexos:Array<string> = ['Hombre', 'Mujer'];
  
  toStr = JSON.stringify;

  form:FormGroup;

  constructor(private fb:FormBuilder, private cervezasService:CervezasService, private contactosService:ContactosService) {
    this.form = this.fb.group({
      nombreContacto: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      telefono: new FormControl('', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]),
      fechaNacimiento: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      cervezasFavoritas: this.fb.array([],[Validators.required, Validators.maxLength(3)])
    })
  }

  ngOnInit(): void {
    this.getCervezasApi();
  }

  onSubmit():void{
    if(this.form.valid){
      this.contactosService.agregarContacto(this.form.value);
      console.log('--registrado nuevo contacto');
      console.log(this.form.value);

      //limpiamos el formulario
      this.form.reset();

    }else{
      console.log('no valido');
    }
  }

  //metodo para manejar las checkboxes
  onCheckBoxChange(e:Event):void{
    const cervezasFavoritas: FormArray = this.form.get('cervezasFavoritas') as FormArray;
    
    //seleccionadas
    if ((e.target as HTMLInputElement).checked){
      let value=JSON.parse((e.target as HTMLInputElement).value)
      cervezasFavoritas.push(new FormControl(value));
      console.log(value);

    //no seleccionadas
    }else{
      let i:number =0;
      cervezasFavoritas.controls.forEach((item) => {
        if(item.value.id == JSON.parse((e.target as HTMLInputElement).value).id){
          cervezasFavoritas.removeAt(i);
          return;
        }
        i++;
      });   
    }
    
  }

  //metodo para rellenar el array cervezas con la api
  getCervezasApi():void{
    this.cervezasService.getCervezasApi().subscribe(data=>
      //data es un array de objetos
      data.forEach((cerveza: Cerveza,i: number) => {
        this.cerve = new ClaseCerveza(
          cerveza.id,cerveza.name,cerveza.description,cerveza.image_url
        );
        this.cervezas.push(this.cerve);
        
        console.log(this.cervezas);
      }))
      
  }

  

  

}
