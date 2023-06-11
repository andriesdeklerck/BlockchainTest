import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-find',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  template: `
    <article>
      <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">

        <label for="Address">Address</label>
        <input id="Address" type="text" formControlName="Address">

        <a [routerLink]="['/battery', address]"><button type="submit" class="primary">Get battery data.</button></a>
      </form>
    </section>
  </article>
  `,
  styleUrls: ['./find.component.css']
})

export class FindComponent {
  applyForm = new FormGroup({
    Address: new FormControl(),
  });

  @Input() address!: string;

  submitApplication() {
    this.address = this.applyForm.value.Address ?? '';
  }
}
