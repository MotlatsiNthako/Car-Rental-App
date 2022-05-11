import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class IonicAuthService {

  constructor( public angularFireAuth: AngularFireAuth) { }

  loginFireauth(value){
    return new Promise<any> ((resolve, reject)=> {
  this.angularFireAuth.signInWithEmailAndPassword(value.email,value.password).then(
  res => resolve(res),
        error => reject(error)
    );
  });
}

  userRegistration(value){
    return new Promise<any> ((resolve, reject) =>{
      this.angularFireAuth.createUserWithEmailAndPassword(value.email,value.password).then(
        res => resolve(res),
        error => reject(error)
        );
    });
  }
}

