import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section *ngIf="housingDetails" class="details">
      <img
        class="details-photo"
        [src]="this.baseUrl + housingDetails.photo"
        alt="Exterior photo of {{ housingDetails.name }}"
      />
      <h2 class="details-heading">{{ housingDetails.name }}</h2>
      <p class="details-location">
        {{ housingDetails.city }}, {{ housingDetails.state }}
      </p>
      <p class="details-unit">{{ housingDetails.availableUnits }} Unit(s)</p>
    </section>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationId = 0;
  housingDetails: HousingLocation | null = null;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    console.log('this.housingLocationId', this.housingLocationId);
    this.housingService
      .getHousingLocationById(this.housingLocationId)
      .then((data) => {
        this.housingDetails = data;
      });
  }
}
