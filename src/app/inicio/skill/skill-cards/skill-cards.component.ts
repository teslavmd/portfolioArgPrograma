import { Component, OnInit } from '@angular/core';
import { SkillCard } from './skill-model';
import { SkillService } from './skill.service';
import  Swal from 'sweetalert2'
import { AuthenticationService } from '../../auth/authentication.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-skill-cards',
  templateUrl: './skill-cards.component.html',
  styleUrls: ['./skill-cards.component.css']
})
export class SkillCardsComponent implements OnInit {

  isEdit : boolean = false;
  login : boolean = false;
  cards : SkillCard[];
  nivel : number;
  isLoading : boolean = true;

  constructor(private skillService: SkillService, private authService : AuthenticationService) { 
  }

  ngOnInit(): void {
    this.getCards()
    console.log(this.cards);
    this.login = this.authService.isLogged();
  }


  //SUSCRIBIRSE A LA FUNCION QUE RETORNA LA LISTA DE CARDS
  getCards(){
    this.skillService.getCard()
    .pipe(
      map((cardFromDB) => {
        this.isLoading = false;
        if(cardFromDB === null) return [];
        return cardFromDB;
      })
    )
    .subscribe(
      (cardFromDB : SkillCard[]) => {
        this.cards = cardFromDB;
      }
    )
  }

  //ELIMINAR LAS HABILIDADES
  deleteCard(id : number){
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
        this.skillService.deleteCard(id)
        .subscribe(dato => {
         
        })
        Swal.fire(
          'Borrado!',
          'La habilidad ha sido borrada.',
          'success'
        )
        location.reload();
        this.getCards();
      }
    })
  }

  //TOGGLE BTN 
   editBtn(){
    if(this.isEdit){
      this.isEdit = false;
    }else{
      this.isEdit = true;
    }
  }

  //EDITAR EL NIVEL DE PROGRESO
  editLevel(card : SkillCard){
    this.skillService.editLevel(card)
    .subscribe(data => {
    });
  }


}
