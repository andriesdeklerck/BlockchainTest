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
  <app-cycle *ngFor="let batteryDataCycles of batteryDataList"[batteryDataCycles]="batteryDataCycles"></app-cycle>
</section>
`,
  styleUrls: ['./battery-cycles.component.css']
})
export class BatteryCyclesComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  batteryDataCycles: BatteryData[] = [];
  batteryControllerService: BatteryControllerService = inject(BatteryControllerService);

  constructor() {
    const batteryDataId = String(this.route.snapshot.params['id']);
    this.batteryDataCycles = this.batteryControllerService.getBatteryDataCyclesByMainId(batteryDataId);
  }
}
