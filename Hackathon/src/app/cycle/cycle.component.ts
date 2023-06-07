import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatteryData } from '../battery-data';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BatteryControllerService } from '../battery-controller.service';

@Component({
  selector: 'app-cycle',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
  <article>
  <!-- <img class="listing-photo" [src]="batteryData?.photo" alt="Exterior photo of {{batteryData?.name}}"/> -->
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
  </section>
</article>
`,
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent {
  @Input() batteryData!: BatteryData;
}
