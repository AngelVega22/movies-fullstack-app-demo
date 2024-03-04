import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private http = inject(HttpClient)

  getAll() {
    return this.http.get('https://localhost:7059/api/Movies')
  }

  getById(id: number) {
    return this.http.get(`https://localhost:7059/api/Movies/${id}`)
  }

  create(movie: any) {
    return this.http.post(`https://localhost:7059/api/Movies`, movie)
  }

  update(id: number, movie: any) {
    return this.http.put(`https://localhost:7059/api/Movies/${id}`, movie)
  }

  delete(id: number) {
    return this.http.delete(`https://localhost:7059/api/Movies/${id}`)
  }
}
