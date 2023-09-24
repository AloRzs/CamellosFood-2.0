import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetallePedidoPage } from '../app/principal/sistema/pedidos/lista-pedidos/detalle-pedido/detalle-pedido.page'; // importar la página de detalle de pedido

const routes: Routes = [
  {
    path: '', redirectTo: 'folder/inbox', pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./principal/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./principal/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'recuperar-password',
    loadChildren: () => import('./principal/recuperar-password/recuperar-password.module').then( m => m.RecuperarPasswordPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./principal/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'form-iniciar',
    loadChildren: () => import('./principal/sistema/form-iniciar/form-iniciar.module').then( m => m.FormIniciarPageModule)
  },
  {
    path: 'menu-repa',
    loadChildren: () => import('./principal/sistema/menu-repa/menu-repa.module').then( m => m.MenuRepaPageModule)
  },
  {
    path: 'mi-perfil',
    loadChildren: () => import('./principal/sistema/cuenta/mi-perfil/mi-perfil.module').then( m => m.MiPerfilPageModule)
  },
  {
    path: 'lista-pedidos',
    loadChildren: () => import('./principal/sistema/pedidos/lista-pedidos/lista-pedidos.module').then( m => m.ListaPedidosPageModule)
  },
  {
    path: 'detalle-pedido/:pedidoId', component: DetallePedidoPage 
  }, // Ruta para la página de detalle de pedido con un parámetro
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
