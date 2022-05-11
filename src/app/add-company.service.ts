import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AddCompanyService {
  collectionName = 'Companies';

  constructor( private firestore: AngularFirestore) { }
  createCompany(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  readCompany() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  updateCompany(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  deleteCompany(recordid) {
    this.firestore.doc(this.collectionName + '/' + recordid).delete();
  }
}

