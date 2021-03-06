import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLoginComponent } from './app-login/app-login.component';

const routes: Routes = [
  { path: 'login', component: AppLoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./layout/home/home.module').then(m => m.HomeModule) },
  { path: 'gerenciamento', loadChildren: () => import('./layout/gerenciamento/gerenciamento.module').then(m => m.GerenciamentoModule) },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
