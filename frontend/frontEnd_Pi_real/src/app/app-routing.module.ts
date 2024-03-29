import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';

import { MatiereComponent } from './matiere/matiere.component';

import { QuizComponent } from './quiz/quiz.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { HomePageComponent } from './listCours/home-page.component';
import { DetailsCoursComponent } from './details-cours/details-cours.component';
import { ListQuizComponent } from './list-quiz/list-quiz.component';
import { AjouterMatiereComponent } from './ajouter-matiere/ajouter-matiere.component';
import { AjouterCoursComponent } from './ajouter-cours/ajouter-cours.component';
import { FooterComponent } from './footer/footer.component';
import { StudentProfilComponent } from './student-profil/student-profil.component';
import { TeacherProfilComponent } from './teacher-profil/teacher-profil.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  
 
  { path: 'details/:title', component: DetailsCoursComponent },
  { path: 'upload', component: DetailsCoursComponent },
  { path: 'detailsQuiz/:name', component: QuizComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'listQuiz', component: ListQuizComponent },
  { path: 'addMatiere', component: AjouterMatiereComponent },
  { path: 'footer', component: FooterComponent},
  { path: 'StudentProfil', component: StudentProfilComponent},
  { path: 'TeacherProfil', component: TeacherProfilComponent},



  { path: 'course', component: CourseComponent },
  { path: 'addCours', component: AjouterCoursComponent },
  // { path: 'joinnow', component: JoinnowComponent },
  { path: 'about', component: AboutComponent },
  { path: 'matiere/:nomMatiere', component: MatiereComponent },
  { path: 'matiere/:nomMatiere/quiz', component: ListQuizComponent },
  { path: 'matiere/:nomMatiere/listCours', component: HomePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
