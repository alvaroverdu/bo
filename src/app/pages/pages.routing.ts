import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard'

import { AdminLayoutComponent } from 'src/app/layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { UsuariosComponent } from 'src/app/pages/usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReporteComponent } from './reporte/reporte.component';



const routes: Routes = [

  { path: 'dashboard',component:AdminLayoutComponent, canActivate:[authGuard],        
    children: [
    {path: '',component: DashboardComponent},    
    {path: 'usuarios',component: UsuariosComponent},
    {path: 'usuarios/usuario/:id',component: UsuarioComponent},
    {path: 'reportes',component: ReportesComponent},
    {path: 'reportes/reporte/:id',component: ReporteComponent},
    {path: '**', redirectTo: ''}      
    ]

  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }