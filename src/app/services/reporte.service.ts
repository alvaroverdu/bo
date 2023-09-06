import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { enviroment } from '../../enviroments/enviroments'; 
import { Reporte } from '../models/reporte.model';

@Injectable({
  providedIn: 'root'
})

export class ReporteService {


  constructor(private http: HttpClient, private router: Router) { }

  cargarReportes(searchParams?: any): Observable<Reporte[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}` 
    });

    let params = new HttpParams();

    if(searchParams){
      if (searchParams.reportedUserId) params = params.append('reportedUserId', searchParams.reportedUserId);
      if (searchParams.reporterUserId) params = params.append('reporterUserId', searchParams.reporterUserId);
      if (searchParams.startDate) params = params.append('startDate', searchParams.startDate);
      if (searchParams.status) params = params.append('status', searchParams.startDate);
  
    }

    return this.http.get(enviroment.base_url + `/reports/findReport?${params.toString()}`, { headers }) as Observable<Reporte[]>;
  }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  resolver( id: number, result: number, comments: string): Observable<Reporte> {
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}` 
    });

    const body = {
      reportId: id,
      result: result,
      comments: comments
    };
    console.log(body);
    return this.http.post(enviroment.base_url + '/bo/solveReport', body, {headers}) as Observable<Reporte> ;
    
  }

  asignar( reportId: string): Observable<Reporte> {
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}` 
    });

    return this.http.get(enviroment.base_url + '/bo/assignReport/' + reportId,{headers}) as Observable<Reporte> ;

    
  }
}
