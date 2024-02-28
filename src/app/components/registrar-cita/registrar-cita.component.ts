import { Component, OnInit } from '@angular/core';
import { Cita } from '../../cita';
import { FormsModule } from '@angular/forms';
import { CitaService } from '../../cita.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-registrar-cita',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './registrar-cita.component.html',
  styleUrl: './registrar-cita.component.scss'
})
export class RegistrarCitaComponent implements OnInit {
  cita: Cita = new Cita();
  constructor(private citaServicio: CitaService, private router: Router){}

  ngOnInit(): void {
  }
  guardarCita(){
    this.citaServicio.crear(this.cita).subscribe(dato=>{
      console.log(dato);
      this.irListaCitas();
    }, error => console.log(error));
    
  }

  irListaCitas(){
    this.router.navigate(['/citas']);
  }

  onSubmit(){
    this.guardarCita();
  }

  inicio(){
    this.router.navigate(['/citas']);
  }
}