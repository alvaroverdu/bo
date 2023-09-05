import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { loginForm } from '../interfaces/login-form-interface'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  login(formData: any){
    console.log('Login desde el Usuario.service',formData)
    return this.http.post('http://localhost:8080/api/auth/authenticate',formData);
  }


}
