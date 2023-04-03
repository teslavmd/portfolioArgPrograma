import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionsService } from 'src/app/services/functions.service';
import Swal from 'sweetalert2';
import { ProjectsCard } from '../../models/projects.model';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  loading : boolean;

  id : number;
  proyecto : ProjectsCard;
  fotoInput: string;

  constructor(
    private projectService : ProjectsService, 
    private route : ActivatedRoute,
    private router: Router,
    private functionService : FunctionsService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.buscarProyecto(this.id);
  }

  //CAPTURAR IMAGEN Y OBTENER BASE64 PARA ALMACENAR EN BASE DE DATOS
  capturarArchivo(event : any){
    const file = event.target.files[0];

    this.functionService.extraerBase64(file).then((image : any) => {
      this.proyecto.foto = image.base;
    })

  }
  //---


  buscarProyecto(id : number){
    this.projectService.searchProject(id)
    .subscribe( project => {
      this.proyecto = project;
      console.log("FOTO BASE64 => " + this.proyecto.foto);
    })
  }

  editProject(form : NgForm){
    if(form.valid){
      console.log("SUBRI PROYECTO : " + this.proyecto)
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
