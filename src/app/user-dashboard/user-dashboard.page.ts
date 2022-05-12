/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { AddCompanyService } from '../add-company.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

interface CompanyData {
  Name: string;
  Location: string;
  Time: string;
}
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.page.html',
  styleUrls: ['./user-dashboard.page.scss'],
})
export class UserDashboardPage implements OnInit {
  companyList = [];
  companyData: CompanyData;
  companyForm: FormGroup;

  constructor( private addcompanyservice: AddCompanyService,
     private loadingcontroller: LoadingController,
    public fb: FormBuilder) {
      this.companyData = {} as CompanyData;
     }

  ngOnInit() {
    this.companyForm = this.fb.group({
      Name: ['', [Validators.required]],
      Location: ['', [Validators.required]],
      Time: ['', [Validators.required]]
  });
  this.addcompanyservice.readCompany().subscribe(data => {

    this.companyList = data.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        Name: e.payload.doc.data()['Name'],
        Location: e.payload.doc.data()['Location'],
        Time: e.payload.doc.data()['Time'],
      };
    });
    console.log(this.companyList);

  });
  }


}
