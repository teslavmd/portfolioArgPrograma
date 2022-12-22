import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProjectsCard } from "./projects.model";


@Injectable()
export class ProjectsService{

    urlBD : string = "https://informal-zaneta-teslavmd.koyeb.app/api/argp/projects";

    //urlBD : string = "http://localhost:8080/api/argp/projects";


    constructor(private httpClient : HttpClient){}

    getProjects() : Observable<ProjectsCard[]>{
        return this.httpClient.get<ProjectsCard[]>(`${this.urlBD}`);
    }
    
    addProject(project : ProjectsCard) : Observable<ProjectsCard>{
        return this.httpClient.post<ProjectsCard>(`${this.urlBD}`, project);
    }
    
    deleteCard(card: ProjectsCard) : Observable<ProjectsCard>{
        return this.httpClient.delete<ProjectsCard>(`${this.urlBD}/${card.id}`)
    }

    searchProject(id : number) : Observable<ProjectsCard>{
        return this.httpClient.get<ProjectsCard>(`${this.urlBD}/${id}`);
    }
    
    editProject( card : ProjectsCard, id : number) : Observable<ProjectsCard>{
        return this.httpClient.put<ProjectsCard>(`${this.urlBD}/${id}`, card)
    }
}