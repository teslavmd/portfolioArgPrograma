import { Component, OnInit } from '@angular/core';
import { ProjectsCard } from './projects.model';
import { ProjectsService } from './projects.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { AuthenticationService } from '../../auth/authentication.service';


@Component({
  selector: 'app-projects-cards',
  templateUrl: './projects-cards.component.html',
  styleUrls: ['./projects-cards.component.css']
})
export class ProjectsCardsComponent implements OnInit {

  login : boolean = false;
  projectsCard : ProjectsCard[] = [];

  constructor(private projectsService: ProjectsService, private router : Router, private authService : AuthenticationService) { }

  ngOnInit(): void {
    this.getProjects();
    this.login = this.authService.isLogged();
  }

  getProjects(){
    this.projectsService.getProjects().subscribe( projects => {
      this.projectsCard = projects;
    })
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
          console.log(dato);
        });
        Swal.fire(
          'Borrado',
          'Tu proyecto ha sido borrado.',
          'success'
        )
        location.reload();
      }
    })
  }

}
