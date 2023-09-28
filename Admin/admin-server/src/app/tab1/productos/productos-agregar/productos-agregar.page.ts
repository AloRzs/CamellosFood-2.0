import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { Producto } from 'src/app/clases/Producto';
import { ProductosService } from 'src/app/servicios/productos.service';
import { CategoriasService } from 'src/app/servicios/categorias.service';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/clases/Categoria';

@Component({
  selector: 'app-productos-agregar',
  templateUrl: './productos-agregar.page.html',
  styleUrls: ['./productos-agregar.page.scss'],
})
export class ProductosAgregarPage implements OnInit {

  lsCategorias:Categoria[]=[];
  productForm!:FormGroup
  productoInstancia:Producto={
    id: "",
    nombre: "",
    descripcion: "",
    precio: 0,
    estado: false,
    categoria: new Categoria()
  }

  constructor(private formBuilder:FormBuilder,
    private servicioApi:ProductosService,
    private router:Router,
    private servicioApiCtg:CategoriasService,
    private servicioApiProd:ProductosService) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'prod_nombre' : [null, Validators.required],//campos requeridos aa
      'prod_desc' : [null, Validators.required],
      'prod_precio' : [null, Validators.required],
      'prod_categoria' : [null, Validators.required],
    });

    this.obtenerListaCategorias();
  }

  productos:Producto[]=[];
  async obtenerListaCategorias() {
    //los next nos sirve para pasar valores nada mas 
    this.servicioApiCtg.getCategorias().subscribe({ next:(respuesta) => this.lsCategorias=respuesta})
  }

  cargarProductos(){

    this.servicioApiProd.getProductos().subscribe((data) => {this.productos=data})
  }

  async onFormSubmit(form:NgForm) {
    console.log("onFormSubmit del Product ADD")
    if (this.productoInstancia.categoria === null) {
      // No es necesario hacer ninguna modificación, ya está en null
      console.log("no se agrego por la categoria")
      return
    }
    await this.servicioApi.postProducto(this.productoInstancia)
      .subscribe({
        next: (res) => { 
          if (res == null){ // No viene respuesta del registro
            console.log("No se agregó ");
            return
          }
          // Si viene respuesta
          console.log("Se agregó;",this.router);
          this.cargarProductos();
          this.router.navigate(['tabs/productos-registro/productos-lista/']);

        }
      });
      
  }
  


}
