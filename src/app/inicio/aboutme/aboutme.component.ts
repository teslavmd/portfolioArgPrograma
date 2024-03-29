import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../../auth/authentication.service';
import { InfoAboutMe } from '../../models/aboutme.model';
import { AboutmeService } from '../../services/aboutme.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  login : boolean = false;
  aboutme : InfoAboutMe;
  isEditable : boolean = false;
  isLoading : boolean = true;
     


  constructor(
    private aboutService : AboutmeService, 
    private authService : AuthenticationService
    ) { }

  ngOnInit(): void {
    this.getTexto();
    this.login = this.authService.isLogged();
  }

  getTexto(){
    this.aboutService.getInfoAbout()
    .pipe(
      map(info => {
        this.isLoading = false;
        return info;
      })
    )
    .subscribe(info => {
      this.aboutme = info;
    });
  }


  //MODIFICAR LA INFORMACION SOMBRE MI
  cargarInfo(texto : InfoAboutMe){
    this.aboutService.addInfoAbout(texto)
    .subscribe(dato => {
      Swal.fire(
        'Informacion cargada!',
        "",
        'success'
      )
    },
    err =>{
      Swal.fire(
        'Ocurrio un error!',
        "Verifica que los datos ingresados sean correctos o intentalo de nuevo",
        'error'
      )
    }
    )
  }

  editarTexto(){
    if(this.isEditable){
      this.isEditable = false
    }else{
      this.isEditable = true
    }
  }

 


}
