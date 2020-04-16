import { Component, OnInit } from '@angular/core';
import { PropertyService } from './../../services/property.service';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  listView = true;
  properties = [];
  filterResults = [];
  pageIndex = 0;
  pageSize = 3;
  value;
  constructor(private service: PropertyService) { }

  ngOnInit(): void {
    this.service.getProperties().subscribe((res: any) => { this.properties = res.properties; this.filterResults = res.properties });
  }
  getPaginatorData(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  search(term, searchBy) {
    if (searchBy === 'city') {
      this.filterResults = this.properties.filter(x => x.city.toLowerCase().trim() === term.toLowerCase().trim());
    } else {
      this.filterResults = this.properties.filter(x => x.type.toLowerCase().trim() === term.toLowerCase().trim());
    }
  }
}
