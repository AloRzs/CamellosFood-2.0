import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-historial-pedidos',
  templateUrl: './historial-pedidos.page.html',
  styleUrls: ['./historial-pedidos.page.scss'],
})
export class HistorialPedidosPage implements OnInit {

  mostrarPedidos: number = 1; // temporalmente, esta mostrará los pedidos de la persona.

  pedidos: any[] = [];

  pedidosMostrados = [...this.pedidos]; // Inicialmente, muestra todos los pedidos

  constructor(private productService: ProductService, private router: Router) {}

  verDetalles(pedido: any) {
    // Usar el servicio Router para navegar a la página de detalles y pasar el ID del pedido como parámetro
    this.router.navigate(['/detalle-pedido', pedido.id]);
  }

  ngOnInit() {
    this.loadProducts();
    this.mostrarTodosLosPedidos();
     // Llama a la función mostrarTodosLosPedidos() cuando la página se carga
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.pedidos = Array.isArray(data) ? data : Object.values(data);
      },
      (error) => {
        console.error('Error al cargar productos:', error);
      }
    );
  }

  ionViewDidEnter() {
    this.mostrarTodosLosPedidos();
  }

  mostrarTodosLosPedidos() {
    // Muestra todos los pedidos
    this.pedidosMostrados = [...this.pedidos];
  }
}