export class ProjectsCard{
    id : string;
    constructor(
        public nombre: string, 
        public foto : string,
        public tecnologias: string, 
        public descripcion: string, 
        public url_git: string, 
        public url_web: string){}
}