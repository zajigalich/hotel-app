import {Injectable, OnInit} from '@angular/core';
import {Reservation} from "../models/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService implements OnInit {

  private reservations: Reservation[] = [];

  ngOnInit(): void {
    let storedReservations = localStorage.getItem('reservations');
    this.reservations = storedReservations ? JSON.parse(storedReservations) : [];
  }

  // CRUD
  public getReservations(): Reservation[] {
    return this.reservations;
  }

  public getReservation(id: string): Reservation | undefined {
    return this.reservations.find(reservation => reservation.id === id);
  }

  public deleteReservation(id: string): void {
    let index = this.reservations.findIndex(reservation => reservation.id === id);
    this.reservations.splice(index, 1);

    this.saveReservations();
  }

  public addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);

    this.saveReservations();
  }

  public updateReservation(updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(reservation => reservation.id === updatedReservation.id);
    this.reservations[index] = updatedReservation;

    this.saveReservations();
  }

  private saveReservations(): void {
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
