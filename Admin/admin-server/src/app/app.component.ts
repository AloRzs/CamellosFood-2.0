import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public appPages = [
    { title: 'Menu-principal', url: '/folder/inbox', icon: 'grid' },
    { title: 'Iniciar-sesión', url: '/iniciar-sesion', icon: 'person' },
    { title: 'Fake_menu', url: '/menu-principal', icon: 'skull' },
  ];
  constructor() {}
}
