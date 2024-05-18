import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ReservationService} from "../reservation/reservation.service";
import {Reservation} from "../models/reservation";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', [Validators.required]],
      guestEmail: new FormControl('', [Validators.required, Validators.email]),
      roomNumber: new FormControl('', Validators.required),
    });

    let id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.reservationService.getReservation(id).subscribe(res => {
        if (res) {
          this.reservationForm.patchValue(res);
        }
      });
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.params['id'];

      if (id) {
        this.reservationService.updateReservation(id, reservation)
          .subscribe(() => {
            console.log(`Update request for reservation with id=${id} proceeded`);
          });
      } else {
        this.reservationService.addReservation(reservation)
          .subscribe(() => {
            console.log('Create reservation request was proceeded')
          });
      }

      // this.reservationForm.reset();
      this.router.navigate(['/list']);
    }
  }
}
