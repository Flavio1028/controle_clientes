import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private toastr: ToastrService
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

  public fazerLogin(): void {
    if (this.formulario.valid) {

    } else {
      this.toastr.warning('Por favor, informe o usuário e a senha', 'Login', {
        timeOut: 3000,
        positionClass: 'toast-bottom-full-width'
      });
    }

  }

}
