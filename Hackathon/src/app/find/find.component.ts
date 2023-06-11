import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {Router} from '@angular/router';


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

        <button type="submit" class="primary">Get battery data.</button>
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

  submitApplication() {
    this.router.navigate(['/battery', this.applyForm.value.Address]);
  }

  constructor(private router: Router) {}
}
