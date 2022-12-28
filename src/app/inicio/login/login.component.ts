import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../auth/authentication.service';
import { AuthUser } from '../auth/authUser.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin : boolean = false;
  username : string;
  contrasenia : string;
  credenciales : AuthUser;


  constructor(private authService : AuthenticationService, private router : Router) { }

  ngOnInit(): void {
    
  }


  login(event : SubmitEvent){
    event.preventDefault();
    this.credenciales = new AuthUser(this.username, this.contrasenia);
    this.authService.login(JSON.stringify(this.credenciales)).subscribe(
      data => {
        this.isLogin = this.authService.isLogged()
      }
    )

    setTimeout(()=>{
      this.redirect();
    },1200)
  }
  


  redirect(){
    if(this.isLogin){
      setTimeout(() => {
        location.reload();
      }, 1000)
      this.router.navigate(["/aboutme"]);
    }else{
      Swal.fire(
        'Error!',
        'Credenciales invalidas',
        'error'
      )
    }
  }
}
