import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ProjectsCard } from "../models/projects.model";


@Injectable()
export class ProjectsService{

    urlBD : string = environment.urlBD;

    constructor(private httpClient : HttpClient){}

    getProjects() : Observable<ProjectsCard[]>{
        return this.httpClient.get<ProjectsCard[]>(`${this.urlBD}/projects`);
    }
    
    addProject(project : ProjectsCard) : Observable<ProjectsCard>{
        return this.httpClient.post<ProjectsCard>(`${this.urlBD}/projects`, project);
    }
    
    deleteCard(card: ProjectsCard) : Observable<ProjectsCard>{
        return this.httpClient.delete<ProjectsCard>(`${this.urlBD}/projects/${card.id}`)
    }

    searchProject(id : number) : Observable<ProjectsCard>{
        return this.httpClient.get<ProjectsCard>(`${this.urlBD}/projects/${id}`);
    }
    
    editProject( card : ProjectsCard, id : number) : Observable<ProjectsCard>{
        return this.httpClient.put<ProjectsCard>(`${this.urlBD}/projects/${id}`, card)
    }
}