import { Component, OnInit } from '@angular/core';
import { zipinfos } from '../data/ziplocationMOCK';
import { ZIP2LOCATION } from '../data/ziplocation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  zipcode: ZIP2LOCATION[] = zipinfos;
  selectedZIP: ZIP2LOCATION;
  constructor() { }

  ngOnInit(): void {
  }

  showlocation(chosenzipcode: string): void {
    this.selectedZIP = this.zipcode.find(loc => loc.zipcode === chosenzipcode);
  }
}
