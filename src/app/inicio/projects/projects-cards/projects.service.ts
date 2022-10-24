import { Injectable } from "@angular/core";
import { ProjectsCard } from "./projects.model";


@Injectable()
export class ProjectsService{

    projectsCards : ProjectsCard[] = [
        new ProjectsCard(
            'Landing Page de Netflix',
            'HTML5, CSS y JS',
            'https://github.com/teslavmd/netflix-landing-page',
            'https://landing-page-netflix.netlify.app'
        ),
        new ProjectsCard(
            'Busar Información de una direccion IP',
            'HTML5, CSS, JS y API -> "IP Geolocation and Threat Detection" by Ipregistry.',
            'https://github.com/teslavmd/ip-info',
            'https://infoip-vmd.netlify.app'
        ),
    ];


    constructor(){}

    deleteCard(card: ProjectsCard){
        const indice = this.projectsCards.indexOf(card);

        this.projectsCards.splice(indice, 1);
    }

    addProject(project : ProjectsCard){
        this.projectsCards.push(project);
    }

}