import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PropertyService } from './../services/property.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {
  propertyForm = this.fb.group({
    type: ['', Validators.required],
    city: ['', Validators.required],
    price: ['', Validators.required],
    noOfBedrooms: ['', Validators.required],
    refNumber: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]],
    image: ['', Validators.required]
  });
  propertyId: string;
  success = false;
  constructor(private fb: FormBuilder, private http: HttpClient, private service: PropertyService, private route: ActivatedRoute, ) { }



  ngOnInit(): void {
    this.propertyId = this.route.snapshot.paramMap.get('id');
    if (this.propertyId) {
      this.service.getPropertyById(this.propertyId).subscribe((res: any) => {
        if (res.success) {
          const obj = res.property[0];
          delete obj._id
          this.propertyForm.setValue(obj);
        }
      })
    }
  }

  createBlob(file, callback) {
    var reader = new FileReader();
    reader.onload = () => { callback(reader.result) };
    reader.readAsDataURL(file);
  }

  uploadImage(event) {
    this.createBlob(event.srcElement.files[0], (blobString) => {
      this.http.post('https://api.cloudinary.com/v1_1/dauv0boag/image/upload', { file: blobString, upload_preset: 'gtxlmeb9', folder: 'properties' }).subscribe(res => {
        console.log('res', res['secure_url'])
        this.propertyForm.patchValue({
          image: res['secure_url']
        })
      })
    });
  }

  submit() {
    if (!this.propertyId) {
      this.service.addProperty(this.propertyForm.value).subscribe((res: any) => {
        if (res.success) {
          this.propertyForm.reset();
          this.success = true;
        }
      })
    } else {
      this.service.updateProperty(this.propertyForm.value, this.propertyId).subscribe((res: any) => {
        if (res.success) {
          this.success = true;
        }
      })
    }
  }

}
