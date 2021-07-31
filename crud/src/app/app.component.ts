import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies = [{title:'titanic'},{title : 'avatar'}]
  constructor (private api:ApiService){
    this.getMovies();
  }
  getMovies=()=>{
    this.api.getAllMovies().subscribe(
      data =>{
        this.movies = data
      },
      error =>{
        console.log(error)
      }
    )
  }
}
