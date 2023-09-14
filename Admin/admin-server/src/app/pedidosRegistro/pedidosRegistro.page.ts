import { Component, OnInit } from '@angular/core';
import { RegistroVentaService } from '../servicios/registro-venta.service';
import { RegistroVenta } from '../clases/RegistroVenta';

@Component({
  selector: 'app-pedidos-registro',
  templateUrl: 'pedidosRegistro.page.html',
  styleUrls: ['pedidosRegistro.scss']
})
export class PedidosRegistroPage implements OnInit{
  listaRegistrosVenta:RegistroVenta[]=[];
  
  constructor(private registroService:RegistroVentaService) {}

  ngOnInit(){
    this.obtenerRegistros();
  }

  async obtenerRegistros(){
    this.registroService.getRegistroVenta().subscribe({next: (res) => this.listaRegistrosVenta=res})
  }
//   registroVentas=[
//     {
//         id:'001',
//         nombreUsuario:'Juan Causa',
//         fechaEmision:'11/09/23',
//         montoPagado:13000,
//         estado:'Entregado'
//     },
//     {
//         id:'018',
//         nombreUsuario:'Carlos Jara',
//         fechaEmision:'02/09/23',
//         montoPagado:4000,
//         estado:'Entregado'
//     },
//     {
//         id:'004',
//         nombreUsuario:'Benito Benavides',
//         fechaEmision:'23/08/23',
//         montoPagado:13000,
//         estado:'Entregado'
//     },
//     {
//         id:'023',
//         nombreUsuario:'Manuel Montes',
//         fechaEmision:'32/07/23',
//         montoPagado:60000,
//         estado:'Pendiente'
//     }
// ]
  



}
