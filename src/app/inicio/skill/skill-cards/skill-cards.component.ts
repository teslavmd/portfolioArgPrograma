import { Component, OnInit } from '@angular/core';
import { SkillCard } from './skill-model';
import { SkillService } from './skill.service';
import  Swal from 'sweetalert2'


@Component({
  selector: 'app-skill-cards',
  templateUrl: './skill-cards.component.html',
  styleUrls: ['./skill-cards.component.css']
})
export class SkillCardsComponent implements OnInit {

  login : boolean = true;
  cards : SkillCard[] = [];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.cards = this.skillService.cards;
  }

  deleteCard(card: SkillCard){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Borrar un habilidad",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.skillService.deleteCard(card)
        Swal.fire(
          'Borrado!',
          'La habilidad ha sido borrada.',
          'success'
        )
      }
    })
  }




}
