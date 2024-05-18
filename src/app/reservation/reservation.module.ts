import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReservationFormComponent} from '../reservation-form/reservation-form.component';
import {ReservationListComponent} from '../reservation-list/reservation-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeModule} from "../home/home.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeModule,
    RouterModule,
  ],
  providers: [
    ReservationListComponent,
  ]
})
export class ReservationModule {
}
