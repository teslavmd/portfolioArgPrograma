import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProjectsCard } from '../projects/projects-cards/projects.model';
import { ProjectsService } from '../projects/projects-cards/projects.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  id : number;
  proyecto : ProjectsCard;

  constructor(
    private projectService : ProjectsService, 
    private route : ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.buscarProyecto(this.id);
    console.log(this.proyecto);
  }

  buscarProyecto(id : number){
    this.projectService.searchProject(id)
    .subscribe( project => {
      this.proyecto = project;
    })
  }

  editProject(form : NgForm){
    if(form.valid){
      this.projectService.editProject(this.proyecto, this.id)
      .subscribe( dato => {
        console.log(dato);
      })
      form.reset();
      Swal.fire(
        'Completado!',
        'Proyecto Editado!',
        'success'
      )
      this.router.navigate(['/projects'])
    }
  }

  volver(){
    this.router.navigate(['/projects'])
  }
}
