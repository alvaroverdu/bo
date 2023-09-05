import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from 'src/app/layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { UsuariosComponent } from 'src/app/pages/usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';



const routes: Routes = [

  { path: 'dashboard',component:AdminLayoutComponent,         
    children: [
    {path: '',component: DashboardComponent},    
    {path: 'usuarios',component: UsuariosComponent},
    {path: 'reportes',component: ReportesComponent},
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