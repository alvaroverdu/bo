import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private usuarioService:UsuarioService,
              private router: Router ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.log(this.usuarioService.validarToken());
    if(this.usuarioService.validarToken()===false){
      this.router.navigateByUrl('/login');
    }
  }
}
