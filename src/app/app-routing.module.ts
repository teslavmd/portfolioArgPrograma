import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormularioProyectosComponent } from './inicio/formulario-proyectos/formulario-proyectos.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './inicio/header/header.component';
import { NavbarComponent } from './inicio/navbar/navbar.component';
import { SkillComponent } from './inicio/skill/skill.component';
import { ProjectsComponent } from './inicio/projects/projects.component';
import { ContactComponent } from './inicio/contact/contact.component';
import { AboutmeComponent } from './inicio/aboutme/aboutme.component';
import { AddSkillComponent } from './inicio/add-skill/add-skill.component';
import { LoginComponent } from './inicio/login/login.component';
import { EditarProyectoComponent } from './inicio/editar-proyecto/editar-proyecto.component';
import { GuardGuard } from './auth/guard.guard';

const routes : Routes = [
  { path: '', component: AboutmeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nav', component: NavbarComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'skills', component: SkillComponent },
  { path: 'addSkill', component: AddSkillComponent, canActivate : [GuardGuard]},
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: EditarProyectoComponent, canActivate : [GuardGuard]},
  { path: 'addProject', component : FormularioProyectosComponent, canActivate : [GuardGuard] },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
