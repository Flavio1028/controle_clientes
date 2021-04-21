import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';

import { ClienteService } from '../cliente.service';
import { defineLocale, ptBrLocale } from 'ngx-bootstrap/chronos';

defineLocale('pt-br', ptBrLocale);
@Component({
  selector: 'app-cli-cadastrar',
  templateUrl: './cli-cadastrar.component.html',
  styleUrls: ['./cli-cadastrar.component.scss']
})
export class CliCadastrarComponent implements OnInit {

  // Formulario
  formulario: FormGroup;

  // Configuracoes do compo de data
  bsConfig: Partial<BsDatepickerConfig>;

  // Lista com as profissoes
  listaProf: any[];

  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private service: ClienteService,
    private localeService: BsLocaleService
  ) {
    this.localeService.use('pt-br');
    this.bsConfig = Object.assign({}, { containerClass: 'theme-default' });
  }

  ngOnInit(): void {
    this.carregarFormulario();
    this.carregarProfissao();
  }

  // Carrega os campos do formulario
  private carregarFormulario(): void {
    this.formulario = this.fb.group({
      idCliente: [null],
      nmCliente: [null, Validators.required],
      dtNascimento: [null, Validators.required],
      email: [null, Validators.required],
      cpf: ["", Validators.required],
      rg: ["", Validators.required],
      naturalidade: ["", Validators.required],
      telefoneFixo: [""],
      telefoneCelular: ["", Validators.required],
      telefoneComercial: [""],
      telefoneExtra: [""],
      profissao: ["", Validators.required],
    });
  }

  // Carrega as profissoes
  private carregarProfissao(): void {
    this.spinner.show();
    this.service.carregarProfissao().subscribe(
      (lista: any) => {
        this.listaProf = lista.profissoes;
      }, () => { }, () => {
        this.spinner.hide();
      }
    );
  }

  public cadastrar(): void {
    console.log(this.formulario.value);
  }

}
