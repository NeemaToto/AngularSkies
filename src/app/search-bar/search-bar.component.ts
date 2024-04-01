import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})

export class SearchBarComponent {
  constructor(private router: Router) {}

  city: string = '';

  handleSubmit() {
    console.log(this.city);
    this.router.navigateByUrl(`/result?city=${encodeURIComponent(this.city)}`);
  }


}
