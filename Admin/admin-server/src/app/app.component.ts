import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public appPages = [
    { title: 'Menu Principal', url: '/folder/inbox', icon: 'grid' },
    { title: 'Iniciar Sesión', url: '/iniciar-sesion', icon: 'person' },
    { title: 'Repartidor', url: '/menu-repa', icon: 'cube' },
    
  ];
  constructor() {}
}
