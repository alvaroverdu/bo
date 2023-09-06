import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reporte } from 'src/app/models/reporte.model';
import { Usuario } from 'src/app/models/usuario.model';
import { ReporteService } from 'src/app/services/reporte.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  private id1: number = 0;
  private id2: string = '';
  public reporte: any; // Asumiendo que tu modelo 'Reporte' tiene un campo 'id' 
  public resuelto:Boolean = false;

  public profesional: any;

  constructor(private reporteService: ReporteService,
              private usuarioService: UsuarioService,
              private route: ActivatedRoute,
              private location: Location){}

  ngOnInit(): void {
    this.id1 = Number(this.route.snapshot.params['id']);
    this.cargarReportes();
  }

  cargarReportes(): void {
    this.reporteService.cargarReportes(undefined)
    .subscribe(res => {
      // Filtramos el arreglo de reportes para encontrar el que tenga el mismo id
      const reporteFiltrado = res.find(reporte => reporte.id === this.id1);
      if (reporteFiltrado) {
        this.reporte = reporteFiltrado;
        this.id2 = String(this.reporte.reportedUserId);
        this.usuarioService.getProfessionalById(this.id2)
        .subscribe((res: Usuario) => {
          this.profesional = res;
          console.log(this.profesional);
        })
        console.log(this.reporte);
      } else {
        Swal.fire({icon: 'error', title: 'Oops...', text: 'Reporte no encontrado'});
      }
      console.log(res);
      
    }, (error) => {
      Swal.fire({icon: 'error', title: 'Oops...', text: 'No se pudo completar la acción, vuelva a intentarlo'});
    });
  }


  asignar() {
    Swal.fire({
      icon: 'question',
      text: '¿Estás seguro de que deseas asignar este reporte?',
      showCancelButton: true,  // Muestra el botón de cancelar
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(this.reporte.id + '-----');
        this.reporteService.asignar(this.reporte.id)
        .subscribe(res => {
          Swal.fire({icon: 'success', text: 'El reporte se asignó correctamente'});
          this.reporte = res;
          return;
        }, (err) => {
          const errtext = err.error.msg || 'No se pudo completar la acción, vuelva a intentarlo.';
          Swal.fire({icon: 'error', title: 'Oops...', text: errtext});
          return;
        });  
      }
    });
  }

  resolver(){
    Swal.fire({
      icon: 'question',
      text: '¿Cómo desea resolver este reporte?',
      showCancelButton: true,  // Muestra el botón de cancelar
      confirmButtonText: 'Banear',
      cancelButtonText: 'No banear'
    }).then((result) => {
      if (result.isConfirmed) {
        this.reporteService.resolver(this.reporte.id,1,this.reporte.comments)
        .subscribe(res => {
          Swal.fire({icon: 'success', text: 'El usuario se baneo correctamente'});
          this.reporte = res;
          return;
        }, (err) => {
          const errtext = err.error.msg || 'No se pudo completar la acción, vuelva a intentarlo.';
          Swal.fire({icon: 'error', title: 'Oops...', text: errtext});
          return;
        });  
      } else{
        this.reporteService.resolver(this.reporte.id,2,this.reporte.comments)
        .subscribe(res => {
          Swal.fire({icon: 'success', text: 'El usuario no fue baneado'});
          this.reporte = res;
          return;
        }, (err) => {
          const errtext = err.error.msg || 'No se pudo completar la acción, vuelva a intentarlo.';
          Swal.fire({icon: 'error', title: 'Oops...', text: errtext});
          return;
        }); 
      }
    });
  }

  goBack(){
    this.location.back();
  }



  

  

  

}
