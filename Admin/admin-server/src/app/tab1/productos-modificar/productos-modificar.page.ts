import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/clases/Producto';

@Component({
  selector: 'app-productos-modificar',
  templateUrl: './productos-modificar.page.html',
  styleUrls: ['./productos-modificar.page.scss'],
})


export class ProductosModificarPage implements OnInit {
  regis:Producto={
    id:"018",
    nombre:"Carlos Jara",
    descripcion:"alo",
    precio:4000,
    estado:true
};
  constructor(public restApi:ProductosService,public route:ActivatedRoute) { }

  ngOnInit() {
    this.getProductoId();
  }
  async getProductoId(){
    this.restApi.getProducto(this.route.snapshot.paramMap.get('id')!)
    .subscribe({next:(res)=> {
      console.log(res);
      this.regis=res;}})
  }

  // getProducto(id: String): Observable<Producto> {
  //   console.log("Esto para obtener la id:" + id + "el diaulo");
  //   return this.servicioHttp.get<Producto>(this.apiUrlProd + "/" + id)
  // }
}
