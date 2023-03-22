import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../auth/authentication.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  login : boolean = false;

  constructor(private authService : AuthenticationService) { }

  ngOnInit(): void {
    this.login = this.authService.isLogged();
  }

}
