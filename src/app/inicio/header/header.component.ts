import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login : boolean = false;


  constructor(private authService : AuthenticationService) { }

  ngOnInit(): void {
    this.login = this.authService.isLogged();
  }

  logOut(){
    this.authService.logOut();
  }

  toLogin(){
    setTimeout(() => {
      document.getElementById("login")?.scrollIntoView();
    }, 500);
  }
}


