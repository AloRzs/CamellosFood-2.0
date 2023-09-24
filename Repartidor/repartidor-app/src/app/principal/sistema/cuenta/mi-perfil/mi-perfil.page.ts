import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {

  cambiarContrasena = false;

  constructor() { }

  ngOnInit() {
  }

  toggleCambiarContrasena() {
    this.cambiarContrasena = !this.cambiarContrasena;
  }
}
