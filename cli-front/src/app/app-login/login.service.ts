import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './../interface/Usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // URL para realizar o login na aplicacao
  private urlLogin: string = environment.URL_API + '';

  constructor(private http: HttpClient) { }

  /**
   * Faz o login do usuario
   */
  public fazerLogin(form: any): any {
    return this.http.get<Usuario>(`../../assets/mock/usuario.json`).pipe(take(1));
  }

}
