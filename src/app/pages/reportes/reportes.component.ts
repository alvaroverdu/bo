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

  public searchParams = {
    reportedUserId: undefined,
    reporterUserId: undefined,
    startDate: undefined,
    status: undefined
  }


  constructor( private reporteService: ReporteService){}

  ngOnInit(): void {
    console.log("Aqui estoy");
    this.cargarReportes();
  }


  cargarReportes(){
    this.reporteService.cargarReportes(this.searchParams)
    .subscribe(res => {
      console.log(res);
      this.listaReportes = res;
      this.loading = false;
      
    }, (error) => {
      Swal.fire({icon: 'error', title: 'Oops...', text: 'No se pudo completar la acción, vuelva a intentarlo',});
        //console.warn('error:', err);
        this.loading = false;
    });
  }

  resolverReporte(){
    
  }

}
