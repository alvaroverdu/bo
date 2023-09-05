import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { loginForm } from '../interfaces/login-form-interface';
import { enviroment } from '../../enviroments/enviroments'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient,
              private router: Router) { }

  login(formData: any){
    console.log('Login desde el Usuario.service',formData)
    return this.http.post(enviroment.base_url + '/auth/authenticate',formData);
  }

  limpiarLocalStorage() : void {
    localStorage.removeItem('token');
  }

  logout(){
    this.limpiarLocalStorage();
    this.router.navigateByUrl('/login');
  }

  validarToken(): any{
    const token = localStorage.getItem('token');
    if(token === '' || token === null){
      return false;
    } else {
      return true;
    }

    



    //this.http.post(enviroment.base_url + '')

  }


}
