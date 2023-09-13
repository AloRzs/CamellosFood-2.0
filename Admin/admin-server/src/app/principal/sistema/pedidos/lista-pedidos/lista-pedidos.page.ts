import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.page.html',
  styleUrls: ['./lista-pedidos.page.scss'],
})
export class ListaPedidosPage implements OnInit {
  pedidos = [
    { titulo: 'Pedido 1', numeroOrden: 'N° Orden 123456', estado: 'disponible', imagen: 'https://docs-demo.ionic.io/assets/madison.jpg' },
    { titulo: 'Pedido 2', numeroOrden: 'N° Orden 67890', estado: 'completado', imagen: 'https://docs-demo.ionic.io/assets/madison.jpg' },
    { titulo: 'Pedido prueba', numeroOrden: 'N° Orden burenyuu', estado: 'disponible', imagen: 'https://i.pinimg.com/originals/53/9a/2e/539a2e70db0a39600285e2798c236f73.jpg' },
    // Agrega más pedidos según sea necesario
  ];

  pedidosMostrados = [...this.pedidos]; // Inicialmente, muestra todos los pedidos

  constructor() {}

  ngOnInit() {}

  mostrarPedidos(estado: string) {
    // Filtra los pedidos según el estado seleccionado
    this.pedidosMostrados = this.pedidos.filter((pedido) => pedido.estado === estado);
  }

  mostrarTodosLosPedidos() {
    // Muestra todos los pedidos
    this.pedidosMostrados = [...this.pedidos];
  }
}
