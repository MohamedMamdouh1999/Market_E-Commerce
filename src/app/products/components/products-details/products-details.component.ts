import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../interfaces/products';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent {
  constructor(private activated:ActivatedRoute, private service:ProductsService){}
  productDetails!:Products;
  loading:boolean = false
  ngOnInit(): void {
    this.getdetails()
  }
  getdetails(){
    this.loading = true
    let id:string = this.activated.snapshot.paramMap.get("id")!
    this.service.getProduct(id).subscribe({
      next: data => {
        this.productDetails = data
        this.loading = false
      },
      error: error => {
        alert(error.message)
        this.loading = false
      }
    })
  }
}
