import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.page.html',
  styleUrls: ['./detalle-pedido.page.scss'],
})
export class DetallePedidoPage implements OnInit {
  pedido: any;
  pedidoId: string = "";

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pedidoId = params['id'];
      console.log('Pedido ID:', this.pedidoId);

      this.obtenerDetallesPedido(this.pedidoId);
    });
  }

  obtenerDetallesPedido(pedidoId: string) {
    console.log('Obteniendo detalles del pedido con ID:', pedidoId);
    // Utiliza el servicio ProductService para obtener los detalles del pedido por su ID
    this.productService.getProducts().subscribe(
      (productos: any) => {
        // Supongamos que los productos se almacenan en un array y puedes buscar el pedido por su ID
        this.pedido = productos.find((producto: any) => producto.id === pedidoId);
        console.log('Detalles del pedido:', this.pedido);
      },
      (error) => {
        console.error('Error al obtener detalles del pedido:', error);
      }
    );
  }
}


// import { ProductService } from 'src/app/services/product.service';