import { Component, OnInit } from '@angular/core';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';

@Component({
  selector: 'app-battery-status',
  templateUrl: 'battery-status.page.html',
  styleUrls: ['battery-status.page.scss'],
})
export class BatteryStatusPage implements OnInit {

  phoneStatus = '';
  batteryPercentage = '';

  constructor( private batterystatus: BatteryStatus) {}



ngOnInit(){
  this.batterystatus.onChange().subscribe((res) => {
    this.phoneStatus = (res.isPlugged === true) ? 'on charging' : 'on battery';
    this.batteryPercentage = res.level+ '%';

    const subscription = this.batterystatus.onChange().subscribe( status => {
      console.log(status.level, status.isPlugged);
    });
    subscription.unsubscribe();

  });
}
}

