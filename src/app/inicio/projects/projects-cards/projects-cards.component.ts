import { Component, OnInit } from '@angular/core';
import { ProjectsCard } from '../../../models/projects.model';
import { ProjectsService } from '../../../services/projects.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../auth/authentication.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-projects-cards',
  templateUrl: './projects-cards.component.html',
  styleUrls: ['./projects-cards.component.css']
})
export class ProjectsCardsComponent implements OnInit{

  login : boolean = false;
  projectsCard : ProjectsCard[] = [];
  isLoading : boolean = true;
  
  constructor(
    private projectsService: ProjectsService, 
    private router : Router, 
    private authService : AuthenticationService
    ) { }
  
 
  
  ngOnInit(): void {
    this.login = this.authService.isLogged();
    this.getProjects();
  }


  getProjects(){
    this.projectsService.getProjects().pipe(
      map((data) => {
        this.isLoading = false;
        if(data === null) return [];
        return data;
      })
    ).subscribe(data => this.projectsCard = data);
  }

  editProject(card : ProjectsCard){
    this.router.navigate([`/projects/${card.id}`])
  }


  deleteCardProject(card: ProjectsCard){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Estas a punto de borrar un proyecto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.projectsService.deleteCard(card)
        .subscribe(dato => {
          Swal.fire(
            'Borrado',
            'Tu proyecto ha sido borrado.',
            'success'
          )
        },
        err =>{
          Swal.fire(
            'No se pudo borrar el proyecto!',
            "Intentalo otra vez",
            'error'
          )
        });
        
        location.reload();
      }
    })
  }

}
