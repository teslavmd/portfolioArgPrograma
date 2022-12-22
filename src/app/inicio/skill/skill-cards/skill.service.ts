import { Injectable } from '@angular/core';
import { SkillCard } from './skill-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  urlBD = "https://informal-zaneta-teslavmd.koyeb.app/api/argp/skills";
  //urlBD = "http://localhost:8080/api/argp/skills";

  

  constructor(private httpClient : HttpClient) { }


  //METODO PARA OBTENER LAS HABILIDADES DE LA BASE DE DATOS.
  getCard(): Observable<SkillCard[]>{  
    return this.httpClient.get<SkillCard[]>(`${this.urlBD}`);
  }


  addSkill(skill : SkillCard): Observable<SkillCard>{
    return this.httpClient.post<SkillCard>(`${this.urlBD}`, skill);
  }

  deleteCard(id : number ): Observable<SkillCard>{
    return this.httpClient.delete<SkillCard>(`${this.urlBD}/${id}`);    
  }


  editLevel(card : SkillCard):Observable<SkillCard>{
    return this.httpClient.put<SkillCard>(`${this.urlBD}/${card.id}`, card)
  }




}
