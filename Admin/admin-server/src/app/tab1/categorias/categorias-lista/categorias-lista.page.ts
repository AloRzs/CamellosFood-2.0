import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/servicios/categorias.service';
import { Categoria } from 'src/app/clases/Categoria';

@Component({
  selector: 'app-categorias-lista',
  templateUrl: './categorias-lista.page.html',
  styleUrls: ['./categorias-lista.page.scss'],
})
export class CategoriasListaPage implements OnInit {

  lsCategorias:Categoria[]=[];
  constructor(private servicioApi:CategoriasService) { }

  ngOnInit() {
    this.obtenerListaCategorias();
  }

  async obtenerListaCategorias() {
    //los next nos sirve para pasar valores nada mas 
    this.servicioApi.getCategorias().subscribe({ next:(respuesta) => this.lsCategorias=respuesta})
  }
  
}
