import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './inicio/header/header.component';
import { NavbarComponent } from './inicio/navbar/navbar.component';
import { SkillComponent } from './inicio/skill/skill.component';
import { ProjectsComponent } from './inicio/projects/projects.component';
import { ProjectsCardsComponent } from './inicio/projects/projects-cards/projects-cards.component';
import { ContactComponent } from './inicio/contact/contact.component';
import { FooterComponent } from './inicio/footer/footer.component';
import { SkillCardsComponent } from './inicio/skill/skill-cards/skill-cards.component';
import { SkillService } from './inicio/skill/skill-cards/skill.service';
import { ProjectsService } from './inicio/projects/projects-cards/projects.service';
import { FormularioProyectosComponent } from './inicio/formulario-proyectos/formulario-proyectos.component';
import { AboutmeComponent } from './inicio/aboutme/aboutme.component';
import { AddSkillComponent } from './inicio/add-skill/add-skill.component';
import { LoginComponent } from './inicio/login/login.component';
import { FlashMessagesModule, FlashMessagesService } from 'flash-messages-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutmeService } from './inicio/aboutme/aboutme.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditarProyectoComponent } from './inicio/editar-proyecto/editar-proyecto.component';
import { AddEducationComponent } from './inicio/add-education/add-education.component';
import { AuthenticationService } from './inicio/auth/authentication.service';
import { InterceptorService } from './inicio/auth/interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SkillComponent,
    ProjectsComponent,
    ProjectsCardsComponent,
    ContactComponent,
    FooterComponent,
    SkillCardsComponent,
    FormularioProyectosComponent,
    AboutmeComponent,
    AddSkillComponent,
    LoginComponent,
    EditarProyectoComponent,
    AddEducationComponent

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressBarModule
  ],
  providers: [
    SkillService,
    ProjectsService,
    FlashMessagesService,
    AboutmeService,
    AuthenticationService,
    [{
      provide: HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi: true
      }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
