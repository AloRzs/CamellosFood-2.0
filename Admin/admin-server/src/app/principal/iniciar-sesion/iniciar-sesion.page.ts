import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

  password: string = ''; // aca se guarda la clave
  showPassword: boolean = false; // para mostrar o no mostrar la clave

  constructor() { }

  ngOnInit() { }

  togglePasswordVisibility() {
    console.log('togglePasswordVisibility() ejecutado');
    this.showPassword = !this.showPassword;
  }

}
