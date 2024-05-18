import {Injectable} from '@angular/core';
import {Reservation} from "../models/reservation";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly apiUrl = "http://localhost:3001";

  constructor(private http: HttpClient) {
  }

  public getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservations`);
  }

  public getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/reservations/${id}`);
  }

  public deleteReservation(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reservations/${id}`);
  }

  public addReservation(reservation: Reservation): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservations`, reservation);
  }

  public updateReservation(id: string, updatedReservation: Reservation): Observable<any> {
    return this.http.put(`${this.apiUrl}/reservations/${id}`, updatedReservation);
  }
}
