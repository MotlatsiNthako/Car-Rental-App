/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { AddCompanyService } from '../add-company.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

interface CompanyData {
  Name: string;
  Location: string;
  Time: string;
}
@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {
  companyList = [];
  companyData: CompanyData;
  companyForm: FormGroup;

  constructor(
    private addcompanyService: AddCompanyService,
    public fb: FormBuilder
  ) {
    this.companyData = {} as CompanyData;
  }

  ngOnInit() {
    this.companyForm = this.fb.group({
      Name: ['', [Validators.required]],
      Location: ['', [Validators.required]],
      Time: ['', [Validators.required]]
  });
  this.addcompanyService.readCompany().subscribe(data => {

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

CreateRecord() {
  console.log(this.companyForm.value);
  this.addcompanyService.createCompany(this.companyForm.value).then(resp => {
    this.companyForm.reset();
  })
    .catch(error => {
      console.log(error);
    });
}

RemoveRecord(rowID) {
  this.addcompanyService.deleteCompany(rowID);
}

EditRecord(record) {
  record.isEdit = true;
  record.EditName = record.Name;
  record.EditLocation = record.Location;
  record.EditTime = record.Time;
}

UpdateRecord(recordRow) {
  const record = {};
  record['Name'] = recordRow.EditName;
  record['Location'] = recordRow.EditLocation;
  record['Time'] = recordRow.EditTime;
  this.addcompanyService.updateCompany(recordRow.id, record);
  recordRow.isEdit = false;
}


}
