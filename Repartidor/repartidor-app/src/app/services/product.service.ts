import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/productos'; // URL JSON SERVER

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.apiUrl);
  }
}
