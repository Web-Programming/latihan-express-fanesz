import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HousingLocation } from '@interfaces/housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="this.baseUrl + housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <p class="listing-unit">{{ housingLocation.availableUnits }} Unit(s)</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
}
