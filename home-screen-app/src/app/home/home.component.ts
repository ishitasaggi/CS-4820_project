import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userName: string = '';
  numCompartments: number | null = null;
  compartmentError: boolean = false;

  validateCompartments() {
    if (this.numCompartments && this.numCompartments > 3) {
      this.numCompartments = 3;  // Auto-set to max allowed value
      this.compartmentError = true;
    } else {
      this.compartmentError = false;
    }
  }

}

