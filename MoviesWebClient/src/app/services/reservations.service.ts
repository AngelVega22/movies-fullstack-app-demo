import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  private http = inject(HttpClient)

  getAll() {
    return this.http.get('https://localhost:7059/api/Reservations')
  }

  getById(id: number) {
    return this.http.get(`https://localhost:7059/api/Reservations/${id}`)
  }

  create(reservation: any) {
    return this.http.post(`https://localhost:7059/api/Reservations`, reservation)
  }
}
