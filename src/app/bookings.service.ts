import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  collectionName = 'Bookings';

  constructor(private firestore: AngularFirestore) { }
  createBookings(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  readBookings() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  updateBookings(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  deleteBookings(recordid) {
    this.firestore.doc(this.collectionName + '/' + recordid).delete();
  }
}
