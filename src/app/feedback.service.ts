import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  collectionName = 'Feedback';

  constructor(private firestore: AngularFirestore) { }
  createFeedback(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  readFeedback() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }
}
