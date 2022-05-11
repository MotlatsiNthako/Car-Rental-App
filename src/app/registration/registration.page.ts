/* eslint-disable @typescript-eslint/member-ordering */

import { Component, OnInit } from '@angular/core';
import { IonicAuthService } from '../ionic-auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';


export interface User{
  id: string;
  customername: string;
  customernumber: string;
  email: string;
  location: string;
  password: string;
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  validationFormUser: FormGroup;
  successMsg = '';

  validationUserMessage={
    customername: [{type:'required', message:'Enter your name'}],
    customernumber: [{type:'required', message:'phone number must have  8 characters'},
    {type:'pattern', message:'insert numbers only'}],
    email: [
      {type:'required', message:'Email required'},
      {type:'pattern', message:'Email entered is incorrect. Try again'}],

      location: [{type:'required', message:'location required'}],

    password: [
      {type:'required', message:'Provide password'},
      {type: 'minLength',message:'password must have minimum of 5 characters'},
      {type:'pattern', message:'invalid password!Password must have uppercase,lowercase and numbers'}]

  };


  constructor(public formbuilder: FormBuilder,public nav: NavController,private angularFire: AngularFirestore,
    public authservice: IonicAuthService,
    private router: Router, private angularAuth: AngularFireAuth) {

      this.collectionUser = angularFire.collection<User> ('Users');
    }

  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')

      ])),
      customername: new FormControl('',Validators.compose([
        Validators.required
      ])),
      customernumber: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      location: new FormControl('',Validators.compose([
        Validators.required
      ]))
    });
  }

  private collectionUser: AngularFirestoreCollection<User>;
  private users: Observable<User[]>;

  registerUser(value){
    return new Promise<any> ((resolve,reject) => {
      this.angularAuth.createUserWithEmailAndPassword(value.email, value.password).then(

        res => {
          console.log('User ID after reigstration = '+res.user.uid);
          const user: User = {
            id: res.user.uid,
            customername: value.customername,
            customernumber: value.customernumber,
            email: value.email,
            location: value.location,
            password: value.password,
          };
          this.collectionUser.doc(res.user.uid).set(user);
          resolve(res);

          this.router.navigateByUrl('/home',{replaceUrl:true});

        }, err => {
          reject(err);
        }


      );
    });
  }
  goToregisterUser(){
    this.nav.navigateForward(['home']);
  }

  goTohome(value){
    this.nav.navigateForward(['user-dashboard']);
  }

}

