import { Component } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from "sweetalert2"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm = this.fb.group({
    username: ['', Validators.required ],
    password: ['', Validators.required ]
  });

  public formSubmit = false;

  constructor(private fb:FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router) {}

  ngOnInit(){

  }

  login() {
    this.formSubmit = true;
    console.log(this.loginForm);
  
    if (!this.loginForm.valid) {
      console.log('Error');
      return;
    }
  
    this.usuarioService.login(this.loginForm.value)
      .subscribe((res:any) => {
        console.log('Respuesta al subscribe', res);
        
        // Supongamos que el token se encuentra en res.token
        // Almacenamos el token en el Local Storage
        if (res && res.token) {
          localStorage.setItem('token', res.token);
        }
        console.log(res.token);
        this.router.navigateByUrl('/dashboard');
      }, (err) => {
        console.warn('Error respuesta');
        Swal.fire({
          title: 'Error!',
          text: 'Usuario o contraseña incorrectos',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });
  }
  

  campoValido( campo: string){
    return this.loginForm.get(campo)?.valid || !this.formSubmit;
    
  }

}
