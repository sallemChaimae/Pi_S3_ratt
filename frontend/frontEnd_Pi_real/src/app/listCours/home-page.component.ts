import { Component, OnInit } from '@angular/core';

import { UserServiceService } from '../services/user-service.service';
import { cours } from '../models/cours';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  successMessage:String='';
  errorMessage:String='';
  searchResults: cours[] = [];
  nomMatiere:string='';
  constructor(private userService:UserServiceService,private route:ActivatedRoute){}
  handleSearchResults(results: cours[]) {
  
    this.searchResults = results;
  }
  
  ngOnInit() {
    
    this.route.params.subscribe(params => {
      const nomMatiere = params['nomMatiere'];
      console.log('Nom de la matière ppppp:', nomMatiere);
      this.nomMatiere=nomMatiere
      
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
