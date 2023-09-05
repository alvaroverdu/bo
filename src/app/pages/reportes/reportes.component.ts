import { Component } from '@angular/core';
import { Reporte } from 'src/app/models/reporte.model';
import { ReporteService } from 'src/app/services/reporte.service';
import Swal from "sweetalert2"

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {

  public listaReportes: Reporte[] = [];

  public loading = true;


  constructor( private reporteService: ReporteService){}

  ngOnInit(): void {
    console.log("Aqui estoy");
    this.cargarReportes();
  }


  cargarReportes(){
    this.reporteService.cargarReportes()
    .subscribe(res => {
      this.cargarReportes();
    }, (error) => {
      Swal.fire({icon: 'error', title: 'Oops...', text: 'No se pudo completar la acción, vuelva a intentarlo',});
        //console.warn('error:', err);
        this.loading = false;
    });
  }

}
