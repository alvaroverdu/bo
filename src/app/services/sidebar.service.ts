import { Injectable } from '@angular/core';
import { sidebarItem } from '../interfaces/sidebar.inteface';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menuAdmin: sidebarItem[] =[
    { titulo: 'Dashboard Admin', icono: 'fa fa-tachometer-alt', sub: false, url: '/dashboard'},
    //{ titulo: 'Gestión usuarios', icono: 'fa fa-users', sub: false, url: '/dashboard/usuarios'},
    { titulo: 'Gestión reportes', icono: 'fa fa-flag', sub: false, url: '/dashboard/reportes'},

  ];
  none: sidebarItem[]=[
    { titulo: 'error', icono: 'fa fa-exclamation-triangle', sub: false, url: '/error'}
  ]
  constructor( private usuarioService: UsuarioService) { }

  getmenu() {
      return this.menuAdmin;
  }
}
