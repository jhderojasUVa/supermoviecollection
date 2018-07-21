import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GenreType } from '../../model/movie.model';
import { genreType } from '../../model/movie.model';
import { movies } from '../../model/movie.mock-data';

@Component({
  selector: 'moviedetailcomponent',
  templateUrl: './moviedetailcomponent.html',
  styleUrls: ['./moviedetailcomponent.css']
})
export class MovieDetailComponent {

  // Placeholder for the movie
  public movie: any;
  // Reading all movies
  allMovies = movies;

  constructor(private route:ActivatedRoute) {
  }

  // When it's initiated
  ngOnInit() {
    // Taking the id from the URL by the route
    let id = this.route.snapshot.paramMap.get('id');
    let key = this.route.snapshot.paramMap.get('key');
    // Filtering the movie
    let themovie = this.allMovies.filter((movie) => movie.id == parseInt(id) && movie.key == key);
    // Asigning the array to "movie" (remember filter return an array!)
    this.movie = themovie;
  }
}
