import { Routes } from '@angular/router';
import { CitasComponent } from './components/citas/citas.component';
import { RegistrarCitaComponent } from './components/registrar-cita/registrar-cita.component';
import { EditarCitaComponent } from './components/editar-cita/editar-cita.component';

export const routes: Routes = [
    { path: '', component: CitasComponent},
    {path: 'citas', component: CitasComponent},
    {path: 'registro', component: RegistrarCitaComponent},
    {path:'editar', component: EditarCitaComponent}
];
