// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  collectionName = 'Vehicles';

  constructor(
    private firestore: AngularFirestore
  ) { }

  createVehicle(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  readVehicle() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  updateVehicle(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  deleteVehicle(recordid) {
    this.firestore.doc(this.collectionName + '/' + recordid).delete();
  }
}
