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
    return this.http.get(this.baseUrl + 'get-property/' + id);
  }

  deleteProperty(id) {
    return this.http.delete(this.baseUrl + 'delete-property/' + id);
  }

  addProperty(body) {
    return this.http.post(this.baseUrl + 'add-property', body);
  }

  updateProperty(body, id) {
    return this.http.put(this.baseUrl + 'update-property/' + id, body);
  }

}
