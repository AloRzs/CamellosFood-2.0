import { Injectable } from '@angular/core';
import { Categoria } from '../clases/Categoria'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';





const API_URL = "http://localhost:3000/categoria";
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  

  constructor(private servicioHttp:HttpClient) { }


  getCategorias():Observable<Categoria[]>{
    console.log("Se obtienen registros de categoría");
    return this.servicioHttp.get<Categoria[]>(API_URL);
  }

  getCategoria(id:String):Observable<Categoria>{
    console.log("Se obtiene EL registro de categoria con id: "+ id)
    return this.servicioHttp.get<Categoria>(`$(API_URL)/$(id)`)
  }
}
