import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.scss']
})
export class AppBodyComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.fazerLogout();
  }

}
