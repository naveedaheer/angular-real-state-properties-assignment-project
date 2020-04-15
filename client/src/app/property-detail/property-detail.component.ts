import { Component, OnInit } from '@angular/core';
import { PropertyService } from './../services/property.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  property;
  constructor(private service: PropertyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getPropertyById(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.property = res.property[0];
      console.log("this.property", this.property)
    })
  }

}
