import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies = [{title:'test'}]
  title="";
  desc="";
  year="";
  constructor (private api:ApiService){
    this.getMovies();
  }
  getMovies=()=>{
    this.api.getAllMovies().subscribe(
      data =>{
        this.movies = data
        console.log(data)
      },
      error =>{
        console.log(error)
      }
    )
  }
  movieClicked= (movie:any) =>{
    this.api.getOneMovies(movie.id).subscribe(
      data =>{
        this.title = data.title;
        this.desc = data.desc;
        this.year = data.year;
        console.log(data)
      },
      error =>{
        console.log(error)
      }
    )
  }
}
