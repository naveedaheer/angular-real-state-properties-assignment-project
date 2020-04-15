import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {
  profileForm = this.fb.group({
    type: [''],
    city: [''],
    price: [''],
    noOfBedrooms: [''],
    refNumber: [''],
    description: [''],
    image: ['']
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
