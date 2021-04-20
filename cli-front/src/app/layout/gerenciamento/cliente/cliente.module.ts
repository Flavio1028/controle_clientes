import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { NgxPermissionsModule } from 'ngx-permissions';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { ClienteRoutingModule } from './cliente-routing.module';
import { CliListarComponent } from './cli-listar/cli-listar.component';
import { CliCadastrarComponent } from './cli-cadastrar/cli-cadastrar.component';


@NgModule({
  declarations: [CliListarComponent, CliCadastrarComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    ClienteRoutingModule,
    NgxMaskModule.forChild(),
    NgxPermissionsModule.forChild(),
  ]
})
export class ClienteModule { }
