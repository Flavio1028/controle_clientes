import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from './login.service';
import { Usuario } from '../interface/Usuario';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {

  // Cria um formulario para os dados do login
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private service: LoginService,
    private shService: SharedService
  ) { }

  ngOnInit(): void {
    this.carregarForm();
  }

  /**
   * Carrega os dados do formulario
   */
  private carregarForm(): void {
    this.formulario = this.fb.group({
      user: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  /**
   * Faz o login do usuário
   */
  public fazerLogin(): void {
    if (this.formulario.valid) {
      this.spinner.show();
      const data: Usuario = { user: this.formulario.get('user').value, password: btoa(this.formulario.get('password').value) };
      this.service.fazerLogin(data).subscribe(
        () => {
          this.spinner.hide();
        }, () => {
          this.spinner.hide();
          this.shService.toastError('Desculpe, ocorreu um erro ao realizar o login', 'LOGIN');
        }
      );
    } else {
      this.shService.toastWarning('Por favor, informe o usuário e a senha', 'LOGIN');
    }

  }

}
