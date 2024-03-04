import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowtimesService {

  private http = inject(HttpClient)

  getAll() {
    return this.http.get('https://localhost:7059/api/Showtimes')
  }

  getById(id: number) {
    return this.http.get(`https://localhost:7059/api/Showtimes/${id}`)
  }

}
