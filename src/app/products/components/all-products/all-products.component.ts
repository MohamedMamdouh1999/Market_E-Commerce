import { Component } from '@angular/core';
import { Carts } from '../../interfaces/carts';
import { Products } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent{
  constructor(private service:ProductsService){}
  loading:boolean = false
  allProdcts:Products[] = []
  categories:string[] = []
  carts:Carts[] = []
  
  ngOnInit(): void {
    this.getProduct()
    this.getCategories()
  }
  getProduct(){
    this.loading = true
    this.service.getAllProducts().subscribe({
      next: products => {
        this.allProdcts = products
        this.loading = false
      },
      error: error => {
        alert(error.message)
        this.loading = false
      }
    })
  }
  getCategories(){
    this.service.getAllCategories().subscribe({
      next: categories => this.categories = categories,
      error: error => alert(error.message)
    })
  }
  filterProducts(category:any){
    this.loading = true
    if(category.target.value === "all"){
      this.loading = false
      this.getProduct()
    } else{
      this.service.filterCategories(category.target.value).subscribe({
        next: products => {
          this.allProdcts = products
          this.loading = false
        },
        error: error => {
          alert(error.message)
          this.loading = false
        }
      })
    }
  }
  getdetails(event:Carts){
    if(event.quantity){
      if("cart" in localStorage){
        this.carts = JSON.parse(localStorage.getItem("cart")!)
        let exist:object = this.carts.find(item => item.product.id === event.product.id)!
        if(exist){
          alert("This product is already added")
        } else{
          this.carts.push(event)
          localStorage.setItem("cart",JSON.stringify(this.carts))
        }
      } else{
        this.carts.push(event)
        localStorage.setItem("cart",JSON.stringify(this.carts))
      }
    }
  }
}
