import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { ClienteRoutingModule } from './cliente-routing.module';
import { CliListarComponent } from './cli-listar/cli-listar.component';


@NgModule({
  declarations: [CliListarComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
