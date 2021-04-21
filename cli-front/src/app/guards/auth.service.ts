import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

import { Usuario } from '../interface/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private permissionsService: NgxPermissionsService
  ) { }

  /**
   * Carrega os dados do usuário ao realizar o login
   * @param user
   */
  carregarDadosSessao(user: Usuario): void {
    localStorage.setItem('token', user.token);
    this.carregarDadosPerfil();
  }

  /**
   * Recarrega a sessão salva no navegador
   */
  recarregarDadosSessao(): void {
    if (localStorage.getItem('token')) {
      try {
        const token = this.carregarDadosToken();
        if (token) {
          this.carregarDadosPerfil();
          this.router.navigateByUrl('home');
        }
      } catch (err) {
        this.fazerLogout();
      }
    } else {
      this.fazerLogout();
    }
  }

  /*
   * Carrega os dados do perfil
   */
  private carregarDadosPerfil(): void {
    try {
      this.permissionsService.loadPermissions(this.carregarDadosToken().profile);
    } catch (e) {
      this.fazerLogout();
    }
  }

  /**
   * Faz o logout do usuário
   */
  fazerLogout(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.permissionsService.flushPermissions();
    this.router.navigateByUrl('login');
  }

  /*
   * Valida o token
   */
  public carregarDadosToken(): any {
    if (localStorage.getItem('token') !== 'null' && localStorage.getItem('token')) {
      return jwt_decode(localStorage.getItem('token'));
    }
    return '';
  }

}
