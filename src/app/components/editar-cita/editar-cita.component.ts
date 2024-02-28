import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../cita.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cita } from '../../cita';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-cita',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './editar-cita.component.html',
  styleUrl: './editar-cita.component.scss'
})
export class EditarCitaComponent implements OnInit  {

  citaForm: FormGroup;
  citas: any;
  
  // citas:  Cita[] = []
  nombre: FormControl = new FormControl('')
  constructor(private citaService: CitaService, private fb: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.citaForm = this.fb.group({
      id:[''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['', Validators.required],
      color: ['', Validators.required],
    });

    this.citaService.getAllCitas().subscribe(resp =>{
      this.citas = resp;
    },
    error => {console.log(error)}
    );
    
  }
  //nuevo
 
  

  guardar(): void{
    this.citaService.saveCita(this.citaForm.value).subscribe(data =>{
      this.citaForm.reset();
      this.citas.push(data);
      
    },
    error=>console.log(error)    
    )    
  }

  eliminar(cita:any): void{
    this.citaService.deleteCita(cita.id).subscribe(data =>{
      console.log(data);
      if(data ===true){
        this.citas.pop(cita)
      }
    },
    error=>console.log(error)
    )
  }
  private obtenerCitas(){
    this.citaService.getListaCitas().subscribe(dato =>{
      this.citas= dato;
    })
  }

  eliminarCita(id:number){
    this.citaService.eliminarCita(id).subscribe(dato=>{
      console.log(dato);
      this.obtenerCitas();
    })
  } 

  editar(cita:any){
    this.citaForm.setValue({
      id:cita.id,
      name: cita.name,
      description: cita.description,
      duration: cita.duration,
      color: cita.color,     
    })
  }

  






  //viejo

  getFactura(id:number):void {
    this.citaService.editarCita(id).subscribe(response => {
       console.log(response)
       this.nombre.setValue(response.name)
      
    })
  }

  
}
