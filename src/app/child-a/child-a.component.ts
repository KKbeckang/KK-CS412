import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Zip2locationService} from '../zip2location.service';
@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {

  constructor(z2l: Zip2locationService) { }
  zipcode: any;
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter<any>();


  // tslint:disable-next-line:typedef
  emitEvent() {
    this.eventEmitter.emit(this.zipcode);
  }
  ngOnInit(): void {
  }

}
