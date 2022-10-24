import { Injectable } from '@angular/core';
import { SkillCard } from './skill-model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  cards : SkillCard[] = [
    new SkillCard('CSS', '../../../assets/css.svg', 74),
    new SkillCard('HTML', '../../../assets/html.svg', 86),
    new SkillCard('JS', '../../../assets/js.svg', 54),
    new SkillCard('git-bash', '../../../assets/git-bash.svg', 72),
    new SkillCard('github', '../../../assets/github.svg', 53),
    new SkillCard('bootstrap', '../../../assets/bootstrap.svg', 50),
  ];

  constructor() { }

  deleteCard(card: SkillCard){
    const indice: number = this.cards.indexOf(card)
    
    this.cards.splice(indice, 1)
    
  }




}
