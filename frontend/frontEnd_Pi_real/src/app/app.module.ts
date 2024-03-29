import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';

import { AboutComponent } from './about/about.component';
import { MatiereComponent } from './matiere/matiere.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizComponent } from './quiz/quiz.component';
import { HelperService } from './services/helper.service';
import { QuizService } from './services/quiz.service';

import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CoursComponent } from './cours/cours.component';
import { CoursItemComponent } from './cours-item/cours-item.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomePageComponent } from './listCours/home-page.component';
import { DetailsCoursComponent } from './details-cours/details-cours.component';
import { ListQuizComponent } from './list-quiz/list-quiz.component';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { SearchBarQuizComponent } from './search-bar-quiz/search-bar-quiz.component';
import { AjouterMatiereComponent } from './ajouter-matiere/ajouter-matiere.component';
import { AjouterCoursComponent } from './ajouter-cours/ajouter-cours.component';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import { StudentProfilComponent } from './student-profil/student-profil.component';
import { TeacherProfilComponent } from './teacher-profil/teacher-profil.component';
import { UserServiceService } from './services/user-service.service';
import { User } from './models/User';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
   
    AboutComponent,
    MatiereComponent,
    QuizComponent,
    SignInComponent,
    SignUpComponent,
    CoursComponent,
    CoursItemComponent,
    SearchBarComponent,
    HomePageComponent,
    DetailsCoursComponent,
    ListQuizComponent,
    QuizItemComponent,
    SearchBarQuizComponent,
    AjouterMatiereComponent,
    AjouterCoursComponent,
    FooterComponent,
    StudentProfilComponent,
    TeacherProfilComponent,
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    FontAwesomeModule,
    ReactiveFormsModule
 
    
   
    
 
  ],
  providers: [HelperService,QuizService,HttpClient,FormControl,UserServiceService,
        {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
