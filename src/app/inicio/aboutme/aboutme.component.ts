import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { TextoAboutMe } from './aboutme.model';
import { AboutmeService } from './aboutme.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  login : boolean = false;
  texto : TextoAboutMe;
  isEditable : boolean = false;
  constructor(private aboutService : AboutmeService, private authService : AuthenticationService) { }

  ngOnInit(): void {
    this.getTexto();
    this.login = this.authService.isLogged();
  }

  getTexto(){
    this.aboutService.getInfoAbout()
    .subscribe(info => {
      this.texto = info;
    });
  }


  cargarTexto(texto : TextoAboutMe){
    this.aboutService.addInfoAbout(texto)
    .subscribe(dato => {
      console.log(dato);
    })
  }

  editarTexto(){
    if(this.isEditable){
      this.isEditable = false
    }else{
      this.isEditable = true
    }
  }

 


}
