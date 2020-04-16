import { Component, OnInit } from '@angular/core';
import { PropertyService } from './../services/property.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  property;
  propertyId: string;

  constructor(private service: PropertyService, private route: ActivatedRoute, private router: Router) {
    this.propertyId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.service.getPropertyById(this.propertyId).subscribe((res:any) => {
      this.property = res.property[0];
      console.log("this.property", this.property)
    })
  }

  deleteProperty() {
    this.service.deleteProperty(this.propertyId).subscribe(() => {
      this.router.navigate(['']);
    })
  }

}
