import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth/login/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [

  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AuthRoutingModule,
  PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
