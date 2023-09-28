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
    categoria:{id:"1",nombre:"alo"}
  };
  constructor(public restApi: ProductosService, 
    public route: ActivatedRoute,
    public loadingController: LoadingController,
    public router: Router,
    public alertController:AlertController) {}

  ngOnInit() {
    this.getProductoId();

  }
  async confirmarEliminacion(id:string) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: '¿Estás seguro de que quieres eliminar este producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Eliminación cancelada');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            // Llama al servicio para eliminar el producto
            this.restApi.delProducto(id).subscribe(
              () => {
                console.log('Producto eliminado');
                this.router.navigate(['tabs/productos-registro/productos-lista/']);
                // Puedes realizar cualquier otra acción después de eliminar
              },
              (error) => {
                console.error('Error al eliminar el producto', error);
                // Maneja el error si es necesario
              }
            );
          }
        }
      ]
    });

    await alert.present();
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

  

  // getProducto(id: String): Observable<Producto> {
  //   console.log("Esto para obtener la id:" + id + "el diaulo");
  //   return this.servicioHttp.get<Producto>(this.apiUrlProd + "/" + id)
  // }
}
