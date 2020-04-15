import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  baseUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  getProperties() {
    return this.http.get(this.baseUrl + 'get-properties');
  }

  getPropertyById(id) {
    return this.http.get(this.baseUrl + 'get-property/' + id );
  }

}
