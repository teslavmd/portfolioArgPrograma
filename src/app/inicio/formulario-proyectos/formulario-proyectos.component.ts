import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { ProjectsCard } from '../../models/projects.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-proyectos',
  templateUrl: './formulario-proyectos.component.html',
  styleUrls: ['./formulario-proyectos.component.css']
})
export class FormularioProyectosComponent implements OnInit {

  nombreInput : string ;
  tecnologiasInput : string ;
  descripcionInput : string;
  repositorioInput : string;
  urlInput : string;


  constructor(private routeService: Router,
              private projecService: ProjectsService) { }

  ngOnInit(): void {
  }

  volver(){
    this.routeService.navigate(['/projects'])
  }


  submitProject(form : NgForm){
    let project : ProjectsCard = new ProjectsCard(this.nombreInput,
                                                  this.tecnologiasInput,
                                                  this.descripcionInput,
                                                  this.repositorioInput,
                                                  this.urlInput)
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

    
    


  }

}
