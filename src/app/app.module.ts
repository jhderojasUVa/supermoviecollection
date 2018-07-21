import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { MovieListComponent } from './components/movielist/movielistcomponent';
import { MovieDetailComponent } from './components/moviedetail/moviedetailcomponent';

import { GenreType } from './model/movie.model';
import { movies } from './model/movie.mock-data';

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(
    [
      {
        path: '',
        component: MovieListComponent
      },
      {
        path: 'detail/:id/:key',
        component: MovieDetailComponent
      },
      {
        path: '**',
        component: MovieListComponent
      },
    ]
  ) ],
  declarations: [ AppComponent, MovieListComponent, MovieDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
