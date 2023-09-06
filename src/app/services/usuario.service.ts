import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { loginForm } from '../interfaces/login-form-interface';
import { enviroment } from '../../enviroments/enviroments'
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  endpoint = enviroment.base_url + '/professionals';

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
  }

  getProfessionalById(id: string): any {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}` 
    });
    return this.http.get<Usuario>(`${this.endpoint}/${id}`,{headers});
  }

  get token(): string {
    return localStorage.getItem('token') || '';
  }


}
