import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Producto } from 'src/app/clases/Producto';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.page.html',
  styleUrls: ['./productos-lista.page.scss'],
})
export class ProductosListaPage implements OnInit {
  productos:any[]=[];
  constructor(private productosServicio:ProductosService) { }

  ngOnInit() {
    this.productosServicio.getProductos()
    .subscribe(res => this.productos = res);
  }


  deshabilitarProducto(productoId: string,producto:any) {
    // Llamada al servicio para cambiar el estado
    this.productosServicio.updateEstadoProductoDes(productoId, producto).subscribe(
      respuesta => {
        console.log("Producto deshabilitado: ", respuesta);
        // Actualiza la lista de productos localmente si es necesario
        const productoIndex = this.productos.findIndex(p => p.id === productoId);
        if (productoIndex !== -1) {
          this.productos[productoIndex].estado = false;
        }
      }
    );
  };

  habilitarProducto(productoId: string,producto:any) {
    // Llamada al servicio para cambiar el estado
    this.productosServicio.updateEstadoProductoHab(productoId, producto).subscribe(
      respuesta => {
        console.log("Producto habilitado: ", respuesta);
        // Actualiza la lista de productos localmente si es necesario
        //es -1 porque usualmente si typescript no encuentra numeros en la lista, no es lógico volver un valor positivo
        //y devuelve un -1
        const productoIndex = this.productos.findIndex(p => p.id === productoId);
        if (productoIndex !== -1) {
          this.productos[productoIndex].estado = true;
        }
      }
    );
  };





}
