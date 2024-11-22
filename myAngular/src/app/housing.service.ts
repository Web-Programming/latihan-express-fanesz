import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { BackendResponse } from './common/type';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  url = 'http://127.0.0.1:3000/housings';

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const response = await fetch(this.url);
    const parsedResponse: BackendResponse<HousingLocation[]> =
      await response.json();

    return parsedResponse.data;
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | null> {
    const response = await fetch(`${this.url}/${id}`);
    const parsedResponse: BackendResponse<HousingLocation> =
      await response.json();

    if (!parsedResponse.success) {
      alert(parsedResponse.message);
      return null;
    }

    return parsedResponse.data;
  }

  submitApplication(firstName: String, lastName: String, email: String) {
    console.log(firstName, lastName, email);
  }
}
