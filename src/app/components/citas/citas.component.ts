import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Cita } from '../../cita';
import { CitaService } from '../../cita.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.scss'
})
export class CitasComponent implements OnInit  {

  citas: Cita[];
  constructor(private citaService: CitaService, private router: Router){}
  ngOnInit(){    
    this.obtenerCitas();
  }
  editarCita(id:number):void{
    this.citaService.editarCita(id).subscribe(response =>{
      console.log(response);
      this.router.navigate(['/editar']);
    })
  }
  
  eliminarCita(id:number){
    this.citaService.eliminarCita(id).subscribe(dato=>{
      console.log(dato);
      this.obtenerCitas();
    })
  } 
  private obtenerCitas(){
    this.citaService.getListaCitas().subscribe(dato =>{
      this.citas= dato;
    })
  }
  crearNuevaCita(){
    this.router.navigate(['/registro']);
  }
}
