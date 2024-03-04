import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { ShowtimesService } from '../services/showtimes.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-showtimes',
  standalone: true,
  imports: [RouterLink, DatePipe, RouterModule],
  templateUrl: './showtimes.component.html',
  styleUrl: './showtimes.component.css'
})
export default class ShowtimesComponent {
  private movieId: string | null = ''
  private route = inject(ActivatedRoute)
  private showtimesService = inject(ShowtimesService)
  showtimes: any | null = []

  ngOnInit(): void {

    this.movieId = this.route.snapshot.paramMap.get('movieId')
    this.showtimesService.getById(Number(this.movieId)).subscribe(showtimes => {

      this.showtimes.push(showtimes)
    })
  }
}
