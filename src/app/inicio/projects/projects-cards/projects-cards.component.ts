import { Component, OnInit } from '@angular/core';
import { ProjectsCard } from './projects.model';
import { ProjectsService } from './projects.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-projects-cards',
  templateUrl: './projects-cards.component.html',
  styleUrls: ['./projects-cards.component.css']
})
export class ProjectsCardsComponent implements OnInit {

  projectsCard : ProjectsCard[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsCard = this.projectsService.projectsCards
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
        this.projectsService.deleteCard(card);
        Swal.fire(
          'Borrado',
          'Tu proyecto ha sido borrado.',
          'success'
        )
      }
    })
  }

}
