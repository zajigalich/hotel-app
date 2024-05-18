import {Inject, Injectable} from '@angular/core';
import {Reservation} from "../models/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly reservations: Reservation[] = [];

  public getReservations(): Reservation[] {
    return this.reservations;
  }

  public getReservation(id: string): Reservation | undefined {
    return this.reservations.find(reservation => reservation.id === id);
  }

  public deleteReservation(id: string): void {
    let index = this.reservations.findIndex(reservation => reservation.id === id);
    this.reservations.splice(index, 1);
  }

  public addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
  }

  public updateReservation(id: string, updatedReservation: Reservation): void {
    updatedReservation.id = id;
    let index = this.reservations.findIndex(reservation => reservation.id === id);
    this.reservations[index] = updatedReservation;
  }
}
