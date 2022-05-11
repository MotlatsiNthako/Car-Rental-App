/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */
// home.page.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

interface VehicleData {
  Brand: string;
  Price: number;
  Type: string;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: 'admin-dashboard.page.html',
  styleUrls: ['admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  vehicleList = [];
  vehicleData: VehicleData;
  vehicleForm: FormGroup;

  constructor(
    private dataService: DataService,
    public fb: FormBuilder
  ) {
    this.vehicleData = {} as VehicleData;
  }

  ngOnInit() {

    this.vehicleForm = this.fb.group({
      Brand: ['', [Validators.required]],
      Price: ['', [Validators.required]],
      Type: ['', [Validators.required]]
    });

    this.dataService.readVehicle().subscribe(data => {

      this.vehicleList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Brand: e.payload.doc.data()['Brand'],
          Price: e.payload.doc.data()['Price'],
          Type: e.payload.doc.data()['Type'],
        };
      });
      console.log(this.vehicleList);

    });
  }

  CreateRecord() {
    console.log(this.vehicleForm.value);
    this.dataService.createVehicle(this.vehicleForm.value).then(resp => {
      this.vehicleForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.dataService.deleteVehicle(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditBrand = record.Brand;
    record.EditPrice = record.Price;
    record.EditType = record.Type;
  }

  UpdateRecord(recordRow) {
    const record = {};
    record['Brand'] = recordRow.EditBrand;
    record['Price'] = recordRow.EditPrice;
    record['Type'] = recordRow.EditType;
    this.dataService.updateVehicle(recordRow.id, record);
    recordRow.isEdit = false;
  }

}
