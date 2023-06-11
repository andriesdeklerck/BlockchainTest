import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BatteryControllerService } from '../battery-controller.service';
import { BatteryData } from '../battery-data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-battery',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
  <article>
  <section class="listing-description">
    <h2 class="listing-heading">{{batteryData?.Id}}</h2>
    <p class="listing-location">{{batteryData?.MaxVoltageDischarge}}, {{batteryData?.MinVoltageDischarge}}</p>
  </section>
  <section class="listing-features">
    <h2 class="section-heading">Data</h2>
    <ul>
      <li>Data 1: {{batteryData?.TimeAt4_15V}}</li>
      <li>Data 2: {{batteryData?.TimeConstantCurrent}}</li>
      <li>Data 3: {{batteryData?.DecrementTime}}</li>
    </ul>
    <a [routerLink]="['/battery/cycles', batteryData?.Address]">See Details</a>
  </section>
</article>
`,
  styleUrls: ['./battery.component.css']
})

export class BatteryComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  batteryControllerService = inject(BatteryControllerService);
  @Input() batteryData!: BatteryData | undefined;

  constructor() {
    const batteryDataId = String(this.route.snapshot.params['address']);
    this.batteryData = this.batteryControllerService.getLastUpdatedBatteryDataByAddress(batteryDataId);
  }
}
