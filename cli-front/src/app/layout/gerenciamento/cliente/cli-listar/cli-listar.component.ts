import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

import { ClienteService } from '../cliente.service';
import { Cliente } from 'src/app/interface/Cliente';

@Component({
  selector: 'app-cli-listar',
  templateUrl: './cli-listar.component.html',
  styleUrls: ['./cli-listar.component.scss']
})
export class CliListarComponent implements OnInit {

  private listaClientes: Array<Cliente>;
  public contentArray: any;
  public returnedArray: Array<Cliente>;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private service: ClienteService
  ) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  // Carrega os clientes cadastrados
  private carregarDados(): void {
    this.spinner.show();
    this.service.carregarClientes().subscribe(
      (cliente: Array<Cliente>) => {
        this.listaClientes = cliente;
        // Carrega o total de itens
        this.contentArray = new Array(this.listaClientes.length).fill('');
        this.contentArray = this.listaClientes.map((cliente: any) => cliente);
        this.returnedArray = this.contentArray.slice(0, 10);
      },
      (err: any) => {
        console.log(err);
      },
      () => {
        this.spinner.hide();
      }
    );
  }

  // Faz a paginacao
  public pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }

}
