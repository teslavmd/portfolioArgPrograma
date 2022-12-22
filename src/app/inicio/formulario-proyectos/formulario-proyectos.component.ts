import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProjectsService } from '../projects/projects-cards/projects.service';
import { ProjectsCard } from '../projects/projects-cards/projects.model';
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
      console.log(dato);
    });

    form.reset()
    Swal.fire(
      'Completado!',
      'Nueva habilidad Agregada!',
      'success'
    )


  }

}
