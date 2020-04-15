import { Component, OnInit } from '@angular/core';
import { PropertyService } from './../../services/property.service';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  listView = false;
  properties = [];
  pageIndex = 0;
  pageSize = 3;
  constructor(private service: PropertyService) { }

  ngOnInit(): void {
    this.service.getProperties().subscribe((res) => { this.properties = res.properties });
  }
  getPaginatorData(event, resourceView) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
}
}
