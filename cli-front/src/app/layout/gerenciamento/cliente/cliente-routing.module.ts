import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { CliListarComponent } from './cli-listar/cli-listar.component';

const routes: Routes = [
  {
    path: '',
    component: CliListarComponent,
    data: {
      permissions: {
        only: ['acess_cliente'],
        redirectTo: 'login'
      }
    },
    canActivate: [NgxPermissionsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
