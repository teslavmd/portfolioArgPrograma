import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { ProjectsCard } from '../../models/projects.model';
import Swal from 'sweetalert2';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-formulario-proyectos',
  templateUrl: './formulario-proyectos.component.html',
  styleUrls: ['./formulario-proyectos.component.css']
})
export class FormularioProyectosComponent implements OnInit {

  loading : boolean;

  nombreInput : string ;
  fotoInput : string;
  tecnologiasInput : string ;
  descripcionInput : string;
  repositorioInput : string;
  urlInput : string;


  constructor(
    private routeService: Router,
    private projecService: ProjectsService,
    private functionService : FunctionsService
    ) { }

  ngOnInit(): void {
  }

  //CAPTURAR IMAGEN Y OBTENER BASE64 PARA ALMACENAR EN BASE DE DATOS
  capturarArchivo(event : any){
    const file = event.target.files[0];

    this.functionService.extraerBase64(file).then((image : any) => {
      this.fotoInput = image.base;
    })

    return this.fotoInput;
  }
  //---

  //BUTTON VOLVER A LA LISTA DE PROYECTOS
  volver(){
    this.routeService.navigate(['/projects'])
  }
  //---

  //SUBIR PROYECTO A LA BASE DE DATOS
  submitProject(form : NgForm){
    let project : ProjectsCard = new ProjectsCard(
      this.nombreInput,
      this.fotoInput,
      this.tecnologiasInput,
      this.descripcionInput,
      this.repositorioInput,
      this.urlInput
    )
    this.projecService.addProject(project)
    .subscribe(dato => {
      Swal.fire(
        'Completado!',
        'Nuevo proyecto agregado!',
        'success'
      )
      form.reset()
    }, err => {
      Swal.fire(
        'Ha ocurrido un error!',
        'Verfica que lo datos esten bien ingresados... o intentalo otra vez!',
        'error'
      )
    });
    //---
    
    


  }

}
