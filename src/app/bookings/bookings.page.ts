/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../bookings.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DatetimeOptions } from '@ionic/core';

interface BookingsData {
  Name: string;
  Brand: string;
  Price: number;
  Location: string;
  PickUp: string;
  Return: string;
}
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  bookingsList = [];
  bookingsData: BookingsData;
  bookingsForm: FormGroup;
  constructor( private bookingsService: BookingsService,
    public fb: FormBuilder) {
      this.bookingsData = {} as BookingsData;
    }

  ngOnInit() {
    this.bookingsForm = this.fb.group({
      Name: ['', [Validators.required]],
      Brand: ['', [Validators.required]],
      Price: ['', [Validators.required]],
      Location: ['', [Validators.required]],
      PickUp: ['', [Validators.required]],
      Return: ['', [Validators.required]]
  });
  this.bookingsService.readBookings().subscribe(data => {

    this.bookingsList = data.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        Name: e.payload.doc.data()['Name'],
        Brand: e.payload.doc.data()['Brand'],
        Price: e.payload.doc.data()['Price'],
        Location: e.payload.doc.data()['Location'],
        PickUp: e.payload.doc.data()['PickUp'],
        Return: e.payload.doc.data()['Return']
      };
    });
    console.log(this.bookingsList);

  });
  }

}
