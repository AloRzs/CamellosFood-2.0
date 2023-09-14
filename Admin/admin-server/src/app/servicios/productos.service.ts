import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../clases/Producto';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  private apiUrlProd="http://localhost:3000/productos";

  constructor(private servicioHttp:HttpClient) { }

  getProductos(): Observable<any[]> {
    return this.servicioHttp.get<any[]>(this.apiUrlProd);
  }
  getProducto(id: string): Observable<Producto> {
    console.log("Esto para obtener la id del producto:" + id);
    return this.servicioHttp.get<Producto>(this.apiUrlProd + "/" + id)
  }

  updateEstadoProductoDes(productoId: string,producto: any): Observable<any> {
    const url = `${this.apiUrlProd}/${productoId}`;
    const productoActualizado = {...producto,estado:false}
    return this.servicioHttp.put(url, productoActualizado);
  }
  updateEstadoProductoHab(productoId: string,producto: any): Observable<any> {
    const url = `${this.apiUrlProd}/${productoId}`;
    const productoActualizado = {...producto,estado:true}
    return this.servicioHttp.put(url, productoActualizado);
  }

  }


