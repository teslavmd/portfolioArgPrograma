import { Injectable } from '@angular/core';
import { SkillCard } from './skill-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  urlBD = environment.urlBD;
  constructor(private httpClient : HttpClient) { }
  //METODO PARA OBTENER LAS HABILIDADES DE LA BASE DE DATOS.
  getCard(): Observable<SkillCard[]>{  
    return this.httpClient.get<SkillCard[]>(`${this.urlBD}/skills`);
  }
  addSkill(skill : SkillCard): Observable<SkillCard>{
    return this.httpClient.post<SkillCard>(`${this.urlBD}/skills`, skill);
  }
  deleteCard(id : number ): Observable<SkillCard>{
    return this.httpClient.delete<SkillCard>(`${this.urlBD}/skills/${id}`);    
  }
  editLevel(card : SkillCard):Observable<SkillCard>{
    return this.httpClient.put<SkillCard>(`${this.urlBD}/skills/${card.id}`, card)
  }
}
