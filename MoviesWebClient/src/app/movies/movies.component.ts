import { Component, OnInit, inject } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { RouterModule, RouterLink } from '@angular/router';
import { ShowtimesService } from '../services/showtimes.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export default class MoviesComponent implements OnInit {
  private fb = inject(FormBuilder)
  filteredMoviesShowtimes: any[] = [];

  private moviesService = inject(MoviesService)
  private showtimesService = inject(ShowtimesService)
  movies: any = []
  showtimes: any = []
  moviesShowtimes: any = []
  moviesGenres: any = []
  uniqueMoviesGenres: any = []
  ngOnInit(): void {
    this.moviesService.getAll().subscribe(movies => {
      this.movies = movies

      for (let i = 0; i < this.movies.length; i++) {
        this.moviesGenres.push(this.movies[i].genre)
      }

      const uniqueGenres = this.moviesGenres.filter((value: any, index: any, self: any) => {
        return self.indexOf(value) === index;
      });
      this.uniqueMoviesGenres = uniqueGenres
    })

    this.showtimesService.getAll().subscribe(showtimes => {
      this.showtimes = showtimes

      this.moviesShowtimes = this.movies.map((movie: { movieID: any; }) => {
        return {
          ...movie,
          showtimes: this.showtimes.filter((showtime: { movieID: any; }) => showtime.movieID === movie.movieID)
        };
      });
      this.filteredMoviesShowtimes = this.moviesShowtimes

    })

  }
  form = this.fb.group({
    theater: [''],
    genre: [''],
  })
  onTheaterOrGenreChange(): void {
    const theaterElement: HTMLSelectElement | null = document.getElementById('theater') as HTMLSelectElement;
    const genreElement: HTMLSelectElement | null = document.getElementById('genre') as HTMLSelectElement;

    const selectedTheater: string = theaterElement ? theaterElement.value : '';
    const selectedGenre: string = genreElement ? genreElement.value : '';

    this.filteredMoviesShowtimes = this.moviesShowtimes.filter((movie: { showtimes: any[]; genre: string; }) => {

      const theaterMatch = !selectedTheater || movie.showtimes.some(showtime => showtime.theater === selectedTheater);
      const genreMatch = !selectedGenre || movie.genre.toLowerCase() === selectedGenre.toLowerCase(); // Ignorar mayúsculas y minúsculas
      return theaterMatch && genreMatch;
    });
  }


}
