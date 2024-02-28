import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from './cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private httpCLient: HttpClient) { }

  baseUrl = "/api/v1/appointment-types";

//nuevo
  public getAllCitas():Observable<any>{
    return this.httpCLient.get(this.baseUrl);
  }

  public saveCita(cita:any):Observable<any>{
    return this.httpCLient.post(this.baseUrl,cita)
  }

  public deleteCita(id:any):Observable<any>{
    return this.httpCLient.delete(this.baseUrl+'delete/'+id)
  }

  public getCita(id:any):Observable<any>{
    return this.httpCLient.get(this.baseUrl+'/'+id)
  }
  
  public updateCita(cita:any):Observable<any>{
    return this.httpCLient.put(this.baseUrl+'/'+cita.id,cita)
  }

//viejo
  getListaCitas():Observable<Cita[]>{
    return this.httpCLient.get<Cita[]>(`${this.baseUrl}`);    
  }

  crear(cita: Cita):Observable<Object>{
    return this.httpCLient.post(`${this.baseUrl}`,cita);
  } 
  
  editarCita(id:number):Observable<Cita>{
    return this.httpCLient.get<Cita>(this.baseUrl+'/'+id)
  }  

  eliminarCita(id:number):Observable<Object>{
    return this.httpCLient.delete(`${this.baseUrl}/${id}`);
  }
}
