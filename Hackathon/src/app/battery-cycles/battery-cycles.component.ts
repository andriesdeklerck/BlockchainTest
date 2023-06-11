import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatteryData } from '../battery-data';
import { BatteryControllerService } from '../battery-controller.service';
import { CycleComponent } from '../cycle/cycle.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-battery-cycles',
  standalone: true,
  imports: [
    CommonModule,
    CycleComponent
  ],
  template: `
<section class="results">
  <app-cycle *ngFor="let batteryData of batteryDataCycles"[batteryData]="batteryData"></app-cycle>
</section>
`,
  styleUrls: ['./battery-cycles.component.css']
})
export class BatteryCyclesComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  batteryControllerService: BatteryControllerService = inject(BatteryControllerService);
  batteryDataCycles: BatteryData[] = [];

  constructor() {
    const batteryDataId = String(inject(ActivatedRoute).snapshot.params['address']);
    this.batteryDataCycles = this.batteryControllerService.getBatteryDataCyclesByAddress(batteryDataId);
  }
}
