import { Component } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  title = 'list of movies';
  //Directives
movies = [
  {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
   cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page']
  },
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    year: 1994,
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton']
  },
  {
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    year: 1994,
    cast: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman']
  }
];

num=0;
showMe=true;
enableDeeppink=false;
enableBig=false;
enableItalics=false;
status='error'; 
color='red';

//pipes
toDate=new Date();
message='Welcome to AngularLearning';
price=1500;


}

