import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.page.html',
  styleUrls: ['./lista-pedidos.page.scss'],
})
export class ListaPedidosPage implements OnInit {
  pedidos: any[] = [];

  pedidosMostrados = [...this.pedidos]; // Inicialmente, muestra todos los pedidos

  constructor(private productService: ProductService, private router: Router) {}

  verDetalles(pedido: any) {
    // Usar el servicio Router para navegar a la página de detalles y pasar el ID del pedido como parámetro
    this.router.navigate(['/detalle-pedido', pedido.id]);
  }

  ngOnInit() {
    this.loadProducts();
    this.mostrarTodosLosPedidos(); // Llama a la función mostrarTodosLosPedidos() cuando la página se carga
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
  

  mostrarPedidos(estado: string) {
    // Filtra los pedidos según el estado seleccionado
    this.pedidosMostrados = this.pedidos.filter((pedido) => pedido.estado === estado);
  }

  mostrarTodosLosPedidos() {
    // Muestra todos los pedidos
    this.pedidosMostrados = [...this.pedidos];
  }
}
