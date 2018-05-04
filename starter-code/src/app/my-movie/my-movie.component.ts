import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from '../movies-service/movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  movieId: string;
  movieInfo: Movie;
  
  constructor(
    private reqThang: ActivatedRoute,
    private moviesThang: MoviesService
  ) { }

  ngOnInit() {
    this.reqThang.paramMap.subscribe( myParams => {
      this.movieId = myParams.get( "blahId" )
    });
    this.movieInfo = this.moviesThang.getMovie( this.movieId );
  }

}
