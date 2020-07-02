import { Component } from '@angular/core';
import { zip } from './zipcodes/zipcode';
import { zips } from './zipcodes/zipcodeMOCK';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zipcode to location APP';
  location: any;

  zipinfo: zip[] = zips;
  selectedLocation: zip;

  constructor() {}

}
