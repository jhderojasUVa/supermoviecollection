import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { GenreType } from '../../model/movie.model';
import { genreType } from '../../model/movie.model';
import { movies } from '../../model/movie.mock-data';

@Component({
  selector: 'movielistcomponent',
  templateUrl: './movielistcomponent.html',
  styleUrls: ['./movielistcomponent.css']
})

export class MovieListComponent {

  // Reading all movies
  allMovies = movies;
  public allGenres = genreType;

  // Defining the variables on the component
  public moviesearch: string;
  public hasresults: boolean;
  public moviesearchresult: any;
  public seeAllText = 'see all';

  // For updating the view
  write(val: string) {
    // Taking what are writing
    this.moviesearch = val;

    // Seen if there are results or not
    // Atention!... maybe it will be most nice if we change the result of the search and all the names of films
    // into uppercase in order to be more easy find names that begins with that letter... it's an idea!
    // but I don't know if this is something that we want, so I haven't do it
    if ((this.allMovies.filter(movie => movie.name.includes(val)).length > 0) && (this.allMovies.filter(movie => movie.name.includes(val)).length < movies.length)) {
      // Filtering!
      this.moviesearchresult = this.allMovies.filter(movie => movie.name.includes(val));
      // We have results!
      this.hasresults = true;
    } else {
      // Wops, no results!
      this.hasresults = false;
    }
  }

  showAll() {
    // Changing the upper menu
    if (this.seeAllText == 'see all') {
      // If we are in the see all, we must see all the films :)
      this.hasresults = true;
      this.moviesearchresult = this.allMovies;
      // and changing the link/menu text, of course
      this.seeAllText = 'see none';
    } else {
      // If we are not viewing anything.. the best way its not having results
      this.hasresults = false;
      // And change the text :)
      this.seeAllText = 'see all';
    }

  }
}
