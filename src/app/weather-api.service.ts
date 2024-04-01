import { Injectable } from '@angular/core';
import axios from 'axios';
import { CurrentForecastData } from '../../typings';

@Injectable({
  providedIn: 'root',
})

export class WeatherApiService {
  constructor() {}

  API_KEY: string = '99c06acb3afacd06144d945e2f571da8';

  async fetchAPI(city: string) {
    const CURRENT_FORECAST_URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&cnt=1&appid=${this.API_KEY}`;
    return axios
      .get(CURRENT_FORECAST_URL)
      .then((response) => {
        const data: CurrentForecastData = response.data;
        return data;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
}
