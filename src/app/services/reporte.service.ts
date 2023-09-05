import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { enviroment } from '../../enviroments/enviroments';  // Asegúrate de importar correctamente tu archivo de entorno

@Injectable({
  providedIn: 'root'
})

export class ReporteService {
  constructor(private http: HttpClient, private router: Router) { }

  cargarReportes(desde: number = 0, textoBusqueda: string = ''): Observable<object> {
    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return this.http.get(enviroment.base_url + '/reports/findReport', { headers });
  }

  get token(): string {
    return localStorage.getItem('token') || '';
  }
}
