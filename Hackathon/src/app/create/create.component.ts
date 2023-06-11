import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatteryControllerService } from '../battery-controller.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BatteryData } from '../battery-data';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
  <article>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="Address">Address</label>
        <input id="Address" type="text" formControlName="Address">

        <label for="CycleIndex">Cycle Index</label>
        <input id="CycleIndex" type="number" formControlName="CycleIndex">

        <label for="DischargeTime">Discharge Time</label>
        <input id="DischargeTime" type="number" formControlName="DischargeTime">

        <label for="TimeAt4_15V">Time At 4.15 V</label>
        <input id="TimeAt4_15V" type="number" formControlName="TimeAt4_15V">

        <label for="TimeConstantCurrent">Time Constant Current</label>
        <input id="TimeConstantCurrent" type="number" formControlName="TimeConstantCurrent">

        <label for="DecrementTime">Decrement Time</label>
        <input id="DecrementTime" type="number" formControlName="DecrementTime">

        <label for="MaxVoltageDischarge">Max Voltage Discharge</label>
        <input id="MaxVoltageDischarge" type="number" formControlName="MaxVoltageDischarge">

        <label for="MinVoltageDischarge">Min Voltage Discharge</label>
        <input id="MinVoltageDischarge" type="number" formControlName="MinVoltageDischarge">

        <label for="ChargeTime">Charge Time</label>
        <input id="ChargeTime" type="number" formControlName="ChargeTime">

        <label for="RemainingUsefulLife">Remaining Useful Life</label>
        <input id="RemainingUsefulLife" type="text" formControlName="RemainingUsefulLife">
        <button type="submit" class="primary">Create battery data.</button>
      </form>
    </section>
  </article>
`,
  styleUrls: ['./create.component.css']
})

export class CreateComponent {
  batteryData: BatteryData | undefined;
  batteryControllerService = inject(BatteryControllerService);

  applyForm = new FormGroup({
    Address: new FormControl(),
    CycleIndex: new FormControl(),
    DischargeTime: new FormControl(),
    TimeAt4_15V: new FormControl(),
    TimeConstantCurrent: new FormControl(),
    DecrementTime: new FormControl(),
    MaxVoltageDischarge: new FormControl(),
    MinVoltageDischarge: new FormControl(),
    ChargeTime: new FormControl(),
    RemainingUsefulLife: new FormControl()
  });

  submitApplication() {
    this.batteryControllerService.addNewBattery(
      this.applyForm.value.Address ?? 0,
      this.applyForm.value.CycleIndex ?? 0,
      this.applyForm.value.DischargeTime ?? 0,
      this.applyForm.value.TimeAt4_15V ?? 0,
      this.applyForm.value.TimeConstantCurrent ?? 0,
      this.applyForm.value.DecrementTime ?? 0,
      this.applyForm.value.MaxVoltageDischarge ?? 0,
      this.applyForm.value.MinVoltageDischarge ?? 0,
      this.applyForm.value.ChargeTime ?? 0,
      this.applyForm.value.RemainingUsefulLife ?? 0
    );
  }
}
