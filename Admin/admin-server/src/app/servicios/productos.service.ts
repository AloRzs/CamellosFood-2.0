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
    //manera de creerse el cuento pa crear una url  (no se usar)
    const productoActualizado = {...producto,estado:true}
    return this.servicioHttp.put(url, productoActualizado);
  }
  putProducto(id:number,producto:Producto):Observable<Producto>{
    //para actualizar se le pasa la id del producto y ademas se le pasa el producto de por si
    console.log("ID PROD:",id,producto)
    return this.servicioHttp.put<Producto>(this.apiUrlProd + "/" + id,producto)
  }

  delProducto(id:string):Observable<Producto>{

    return this.servicioHttp.delete<Producto>(this.apiUrlProd+"/"+id)  
  }
  
  postProducto(producto:Producto):Observable<Producto>{

    return this.servicioHttp.post<Producto>(this.apiUrlProd,producto)
  }

}


