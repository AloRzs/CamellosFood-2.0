import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  var = 0;
  public appPages = [
    { title: 'Menu-principal', url: '/menu-principal', icon: 'grid' },
    { title: 'Iniciar-sesión', url: '/iniciar-sesion', icon: 'person' },
  ];
  constructor() {}
}
