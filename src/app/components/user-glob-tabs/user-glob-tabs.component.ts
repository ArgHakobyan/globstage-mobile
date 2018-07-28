import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {} from 'googlemaps';


@Component({
  selector: 'app-user-glob-tabs',
  templateUrl: './user-glob-tabs.component.html',
  styleUrls: ['./user-glob-tabs.component.scss']
})
export class UserGlobTabsComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  @Input() user;

  constructor() { }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(40.089099, 44.538189),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
