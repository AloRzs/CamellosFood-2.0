import { Injectable } from '@angular/core';
import { RegistroVenta } from '../clases/RegistroVenta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:3000/registroVentas";


@Injectable({
  providedIn: 'root'
})
export class RegistroVentaService {
  constructor(private http: HttpClient) { }


  getRegistroVenta():Observable<RegistroVenta[]>{
    console.log("Método obtener registros venta");
    return this.http.get<RegistroVenta[]>(apiUrl)
  }

  getRegistroVentaId(id: String): Observable<RegistroVenta> {
    console.log("Esto para obtener la id del registro de venta:" + id + "el diaulo");
    return this.http.get<RegistroVenta>(apiUrl + "/" + id)
  }
}
