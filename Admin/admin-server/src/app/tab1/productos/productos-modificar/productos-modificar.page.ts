import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/clases/Producto';
import { ProductosService } from 'src/app/servicios/productos.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CategoriasService } from 'src/app/servicios/categorias.service';
import { Categoria } from 'src/app/clases/Categoria';

@Component({
  selector: 'app-productos-modificar',
  templateUrl: './productos-modificar.page.html',
  styleUrls: ['./productos-modificar.page.scss'],
})
export class ProductosModificarPage implements OnInit {

  lsCategorias:Categoria[]=[];
  productForm!:FormGroup
  producto: Producto = {
    id: '018',
    nombre: 'Carlos Jara',
    descripcion: 'alo',
    precio: 4000,
    estado: true,
    categoria:{id:"1",nombre:"alo"}
  };
  id:any= '';
  constructor(private loadingController:LoadingController,
    private restApi:ProductosService,
    private formBuilder:FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private servicioApiCtg:CategoriasService,
    ) {}

  ngOnInit() {
    this.obtenerListaCategorias();
    this.getProduct(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
      'prod_nombre' : [null, Validators.required],//campos requeridos aa
      'prod_desc' : [null, Validators.required],
      'prod_precio' : [null, Validators.required],
      'prod_categoria' : [null, Validators.required],
    });  
  }
  async obtenerListaCategorias() {
    //los next nos sirve para pasar valores nada mas 
    // this.servicioApiCtg.getCategorias().subscribe({ next:(respuesta) => {this.lsCategorias=respuesta;this.getProduct(this.route.snapshot.params['id']); }})
    this.servicioApiCtg.getCategorias().subscribe({ next:(respuesta) => this.lsCategorias=respuesta})

  }
  async getProduct(id: string) {
    // Crea Wait
      const loading = await this.loadingController.create({
        message: 'Cargando Producto, espere...'
      });
      // Muestra Wait
      await loading.present();
      // Obtiene el Observable
      await this.restApi.getProducto(id + "")
        .subscribe({
          next: (data:Producto) => {
            // Si funciona Rescata el los datos
            this.id = data.id;
            this.producto.nombre = data.nombre;
            this.producto.descripcion = data.descripcion;
            this.producto.precio = data.precio;
            this.producto.categoria = data.categoria;
            console.log("getProductID data****",this.lsCategorias);
            console.log(data,"ALO");
            loading.dismiss();
          }
          , complete: () => { }
          , error: (err) => {
            console.log("Error producto: ");
            console.log(err);
            loading.dismiss();
          }
        })
    }
    async onFormSubmit(form: NgForm) {
      console.log("onFormSubmit ID:" + this.id)
      this.producto.id = this.id;
      this.producto.categoria = this.id;
      await this.restApi.putProducto(this.id, this.producto)
        .subscribe({
          next: (res) => {
            let id = res['id'];
            this.router.navigate(['tabs/productos-registro/productos-lista/']);
          }
          , complete: () => { }
          , error: (err) => { console.log(err); }
        })
  
    }
}
