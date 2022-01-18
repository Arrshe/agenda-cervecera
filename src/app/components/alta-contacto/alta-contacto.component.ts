import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { CERVEZAS } from 'src/app/mock-cervezas/mock-cervezas';
import iCerveza from 'src/app/model/Cerveza';
import Cerveza from 'src/app/model/Cerveza';
import { CervezasService } from 'src/app/services/cervezas.service';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-alta-contacto',
  templateUrl: './alta-contacto.component.html',
  styleUrls: ['./alta-contacto.component.scss']
})
export class AltaContactoComponent implements OnInit {

  @ViewChildren("checkboxes")
  checkboxes!: QueryList<ElementRef>;

  cervezas:iCerveza[]=[];
  cerve!:iCerveza;
  sexos:Array<string> = ['Hombre', 'Mujer'];

  cervezasFavoritas!: FormArray;
  
  toStr = JSON.stringify;

  form:FormGroup;

  constructor(private fb:FormBuilder, private cervezasService:CervezasService, private contactosService:ContactosService) {
    this.form = this.fb.group({
      nombreContacto: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      telefono: new FormControl('', [Validators.required, Validators.maxLength(9), Validators.minLength(9), Validators.pattern("^[0-9]*$")]),
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
      //limpiamos el formarray
      this.cervezasFavoritas.clear();
    }else{
      console.log('no valido');
    }
  }

  //método para limpiar el formulario
  clearForm():void{
    //limpiamos el formulario
    this.form.reset();
    //limpiamos el formarray
    this.cervezasFavoritas.clear();
    this.uncheckAll();
  }
  
  //metodo para manejar las checkboxes
  onCheckBoxChange(e:Event):void{
    this.cervezasFavoritas = this.form.get('cervezasFavoritas') as FormArray;
    
    //seleccionadas
    if ((e.target as HTMLInputElement).checked){
      let value = JSON.parse((e.target as HTMLInputElement).value)
      this.cervezasFavoritas.push(new FormControl(value));

    //no seleccionadas
    }else{
      let i:number = 0;
      this.cervezasFavoritas.controls.forEach((item) => {
        if(item.value.id == JSON.parse((e.target as HTMLInputElement).value).id){
          this.cervezasFavoritas.removeAt(i);
          return;
        }
        i++;
      });   
    }
  }

  //metodo para deseleccionar los checkboxes
  uncheckAll():void {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }

  //metodo para rellenar el array cervezas con la api
  getCervezasApi():void{
    this.cervezasService.getCervezasApi().subscribe(data=>
      //data es un array de objetos
      data.forEach((cerveza: iCerveza,i: number) => {
        this.cerve = new Cerveza(
          cerveza.id,cerveza.name,cerveza.description,cerveza.image_url
        );
        this.cervezas.push(this.cerve);
      }));
  }
}
