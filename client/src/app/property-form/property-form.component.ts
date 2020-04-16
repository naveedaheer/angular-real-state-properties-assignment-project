import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  constructor(private fb: FormBuilder, private http: HttpClient) { }

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
      })
    });
  }

}
