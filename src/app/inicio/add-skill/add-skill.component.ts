import { Component, OnInit, Sanitizer } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SkillService } from '../../services/skill.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { SkillCard } from '../../models/skill-model';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  imgPre : string;
  nombreInput : string;
  nivel : number;
  loading : boolean;


  constructor(
    private skillService : SkillService,
    private routeService : Router,
    private functionService : FunctionsService
    ) { }

  ngOnInit(): void {
  }


  submitSkill(form : NgForm){

    this.loading = true;
    

    let card = new SkillCard(this.nombreInput, this.imgPre, this.nivel)
    console.log(this.imgPre);
    this.skillService.addSkill(card)
    .subscribe(dato => {
      Swal.fire(
        'Completado!',
        'Nueva habilidad Agregada!',
        'success'
      )
      form.reset();
      this.routeService.navigate(['/skills']);
    },
    err => {
      Swal.fire(
        'Ha ocurrido un error!',
        'Intentalo otra vez... o verifica que la imagén NO sea de gran tamaño!',
        'error'
      )
    });

    this.imgPre = '';
    
   

    this.loading = false;
  }

  
  capturarArchivo(event : any){
    const imagen = event.target.files[0];
    this.functionService.extraerBase64(imagen).then((imagen : any) => {
      this.imgPre = imagen.base;
    })

    return this.imgPre;
  }

  
    

}
