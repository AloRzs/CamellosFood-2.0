import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.page.html',
  styleUrls: ['./detalle-pedido.page.scss'],
})
export class DetallePedidoPage implements OnInit {
  pedido: any; // Declaración de la variable pedido

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtener el parámetro de la URL (pedidoId)
    this.route.params.subscribe(params => {
      const pedidoId = params['pedidoId'];

      // Supongamos que tienes una función para obtener los detalles del pedido por su ID
      // Puedes reemplazar esto con tu lógica real de obtención de datos
      this.obtenerDetallesPedido(pedidoId);
    });
  }

  obtenerDetallesPedido(pedidoId: string) {
    // Aquí deberías obtener los detalles del pedido por su ID y asignarlos a la variable pedido
    // Por ejemplo:
    // this.pedido = this.servicioDePedidos.obtenerPedidoPorId(pedidoId);
    
  }
}
