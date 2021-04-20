import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take } from 'rxjs/operators';

import { Cliente } from 'src/app/interface/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // Url para carregar os dados
  private url: string = "assets/mock/clientes.json";

  constructor(private http: HttpClient) { }

  public carregarClientes(): any {
    return this.http.get<Array<Cliente>>(`${this.url}`).pipe(take(1), delay(900));
  }

}
