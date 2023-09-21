import { Component, OnInit } from '@angular/core';
import { RegistroVenta } from 'src/app/clases/RegistroVenta';
import { RegistroVentaService } from 'src/app/servicios/registro-venta.service';

import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle-registro',
  templateUrl: './detalle-registro.page.html',
  styleUrls: ['./detalle-registro.page.scss'],
})
export class DetalleRegistroPage implements OnInit {
  regis:RegistroVenta={
      id:"018",
      nombreUsuario:"Carlos Jara",
      fechaEmision:new Date(),
      montoPagado:4000,
      estado:"Entregado"
  };
  

  constructor(public restApi:RegistroVentaService,public route:ActivatedRoute) { }

  ngOnInit() {
    this.getRegistroVenta();
  }
  async getRegistroVenta(){
    this.restApi.getRegistroVentaId(this.route.snapshot.paramMap.get('id')!)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.regis = res;
        }
      })
  }
}
