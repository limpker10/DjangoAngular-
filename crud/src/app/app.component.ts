import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies = [{title:'test'}]
  selectedMovie:any;

  constructor (private api:ApiService){
    this.getMovies();
    this.selectedMovie = {title:'',desc:'',year:0};
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
        this.selectedMovie = data;
       
        console.log(data)
      },
      error =>{
        console.log(error)
      }
    )
  }
  updateMovie() {
    this.api.updateMovie(this.selectedMovie).subscribe(
      data =>{
        this.selectedMovie = data;
       
        console.log(data)
      },
      error =>{
        console.log(error)
      }
    )
  }
  createMovie(){
    this.api.createMovie(this.selectedMovie).subscribe(
      data =>{
        this.movies.push(data);
       
        console.log(data)
      },
      error =>{
        console.log(error)
      }
    )
  }
  deleteMovie = () => {
    this.api.deleteMovie(this.selectedMovie.id).subscribe(
      data => {
        this.getMovies();
      },
      error => {
        console.log(error);
      }
    );
  }
}
