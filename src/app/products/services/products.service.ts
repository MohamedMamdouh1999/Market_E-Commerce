import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient) { }
  getAllProducts():Observable<any>{
    return this.http.get(environment.baseApi +'products')
  }
  getProduct(id:string):Observable<any>{
    return this.http.get(environment.baseApi +'products/'+ id)
  }
  getAllCategories():Observable<any>{
    return this.http.get(environment.baseApi +'products/categories')
  }
  filterCategories(category:string):Observable<any>{
    return this.http.get(environment.baseApi +'products/category/'+ category)
  }
}
