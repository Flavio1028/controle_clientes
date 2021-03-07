import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/guards/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Dados do usuario da sessao
  nmUsuario: String;

  // Nome perfil acesso.
  nmProfile: String;

  // Data atual
  dtAtual: Date = new Date();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // Carrega s dados do usuário
    this.nmUsuario = this.authService.carregarDadosToken()['name'];
    this.nmProfile = this.authService.carregarDadosToken()['nmProfile'];
  }

}
