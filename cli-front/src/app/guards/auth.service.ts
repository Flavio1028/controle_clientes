import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { EventEmitter, Injectable } from '@angular/core';

import { Usuario } from '../interface/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Indica se o usuario esta autenticado
  usuarioAutenticado = false;
  // Evento que indica se o menu deve ser exibido
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private permissionsService: NgxPermissionsService
  ) { }

  carregarDadosSessao(user: Usuario): void {
    localStorage.setItem('token', user.token + '');
    this.carregarDadosPerfil();
  }

  /*
   * Carrega os dados do perfil
   */
  private carregarDadosPerfil(): void {
    try {
      this.permissionsService.loadPermissions(this.carregarDadosToken().listaPermissao);
    } catch (e) {
      console.log('Perfil invalido!');
    }
  }

  /*
   * Valida o token
   */
  private carregarDadosToken(): any {
    if (localStorage.getItem('token') !== 'null' && localStorage.getItem('token')) {
      return jwt_decode(localStorage.getItem('token'));
    }
    return '';
  }

}
