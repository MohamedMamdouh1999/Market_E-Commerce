import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Carts } from '../interfaces/carts';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  constructor(private http:HttpClient) { }
  createCart(model:Carts):Observable<any>{
    return this.http.post(environment.baseApi +"carts", model)
  }
}
