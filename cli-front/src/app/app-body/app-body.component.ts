import { SharedService } from './../shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.scss']
})
export class AppBodyComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private shService: SharedService
  ) { }

  ngOnInit(): void {
  }

  /**
   * Logout do sistema
   */
  logout(): void {
    // Abre o modal
    const resultado$ = this.shService.modalConfirmacao("Deseja realmente sair ? ");
    resultado$.asObservable().subscribe(
      dados => {
        if (dados) {
          this.auth.fazerLogout();
        }
      }
    );
  }

}
