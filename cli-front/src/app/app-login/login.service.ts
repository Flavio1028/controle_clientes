import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.post<any>(this.urlLogin, form).pipe(take(1));
  }

}
