import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/clases/Producto';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-modificar',
  templateUrl: './productos-modificar.page.html',
  styleUrls: ['./productos-modificar.page.scss'],
})
export class ProductosModificarPage implements OnInit {
  regis: Producto = {
    id: '018',
    nombre: 'Carlos Jara',
    descripcion: 'alo',
    precio: 4000,
    estado: true,
    categoria:""
  };
  constructor(public restApi: ProductosService, 
    public route: ActivatedRoute,
    public loadingController: LoadingController,
    public router: Router,
    public alertController:AlertController) {}

  ngOnInit() {
    this.getProductoId();

  }
  async getProductoId() {
    this.restApi
      .getProducto(this.route.snapshot.paramMap.get('id')!)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.regis = res;
        },
      });
  }

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];


  // getProducto(id: String): Observable<Producto> {
  //   console.log("Esto para obtener la id:" + id + "el diaulo");
  //   return this.servicioHttp.get<Producto>(this.apiUrlProd + "/" + id)
  // }
}
