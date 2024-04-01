import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WeatherApiService } from '../weather-api.service';
import { CurrentForecastData } from '../../../typings';


@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent implements OnInit {
  city: string = '';
  weatherData: CurrentForecastData[] = [];

  constructor(
    private route: ActivatedRoute,
    private weatherAPIService: WeatherApiService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.city = params['city'];

      this.weatherAPIService
        .fetchAPI(this.city)
        .then(data => { // Specify the type as CurrentForecastData
          this.weatherData = [data as CurrentForecastData];
          console.log(this.weatherData);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

}
