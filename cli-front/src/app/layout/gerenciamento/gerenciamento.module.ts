import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciamentoRoutingModule } from './gerenciamento-routing.module';
import { ClienteModule } from './cliente/cliente.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClienteModule,
    GerenciamentoRoutingModule
  ]
})
export class GerenciamentoModule { }
