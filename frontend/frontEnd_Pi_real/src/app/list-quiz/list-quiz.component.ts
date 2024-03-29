import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Quiz } from '../models';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent implements OnInit {
  successMessage:String='';
  errorMessage:String='';
  searchResults: Quiz[] = [];
  quizes:Quiz[]=[]
  constructor(private userService:UserServiceService,private quizService:QuizService){}
  handleSearchResults(results: Quiz[]) {
  
    this.searchResults = results;
  }
  ngOnInit() {
    this.quizService.getAllQuiz().subscribe(quizes => {
      this.quizes = quizes;
    
    });
  }


  signOut() {
    this.userService.logout().subscribe(
      () => {
        console.log('Déconnexion réussie');
        this.successMessage='Déconnexion réussie';
       
      },
      (error) => {
        console.error('Erreur lors de la déconnexion:', error);
        this.errorMessage='Erreur lors de la déconnexion';
      }
    );
  }
  


}
