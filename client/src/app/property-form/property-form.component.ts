import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PropertyService } from './../services/property.service';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {
  propertForm = this.fb.group({
    type: ['', Validators.required],
    city: ['', Validators.required],
    price: ['', Validators.required],
    noOfBedrooms: ['', Validators.required],
    refNumber: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]],
    image: ['', Validators.required]

  });
  constructor(private fb: FormBuilder, private http: HttpClient, private service: PropertyService) { }



  ngOnInit(): void {
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
        this.propertForm.patchValue({
          image: res['secure_url']
        })
      })
    });
  }

  submit() {
    this.service.addProperty(this.propertForm.value).subscribe((res: any) => {
      if (res.success) {
        this.propertForm.reset()
      }
    })
  }

}
