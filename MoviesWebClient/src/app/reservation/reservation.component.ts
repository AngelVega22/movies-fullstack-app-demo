import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export default class ReservationComponent {
  private fb = inject(FormBuilder)
  private showtimeId: string | null = ''
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  private reservationsService = inject(ReservationsService)

  ngOnInit(): void {

    this.showtimeId = this.route.snapshot.paramMap.get('showtimeId')
  }

  form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    documentType: ['', [Validators.required]],
    documentNumber: ['', [Validators.required]],
    showtimeId: [0, [Validators.required]],
    ticketNumber: ['', [Validators.required]],
  })

  register() {
    const randomTicketNumber = Math.floor(Math.random() * 100000).toString();

    const formValues = this.form.value
    const reservation = { ...formValues }
    reservation.showtimeId = Number(this.showtimeId)
    reservation.ticketNumber = randomTicketNumber

    this.reservationsService.create(reservation).subscribe(
      () => {
        this.router.navigate(['/success'])
      }
    )
  }
}
