import {Component, OnInit} from '@angular/core';
import {Zip2locationService} from '../zip2location.service';

@Component({
  selector: 'app-parent',
  template: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private z2lService: Zip2locationService) {
  }


  cacheValue: any;
  cityName: any;


  // tslint:disable-next-line:typedef
  getlocationbyzip(zipcode: string) {
    this.z2lService.getlocation(zipcode).subscribe(
      response => {
        this.z2lService = response['lat']['lng']['cityname']['zipcode'];
        this.cityName = response['cityData']['zipcode'];
        if (response['cached'] === true) {
          this.cacheValue = 'cached';
        } else {
          this.cacheValue = 'not cached';
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
