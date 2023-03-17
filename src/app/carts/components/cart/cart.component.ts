import { Component } from '@angular/core';
import { Carts } from 'src/app/products/interfaces/carts';
import { CartsService } from './../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(private service:CartsService){}
  carts:Carts[]=[]
  total:number = 0
  success:boolean = false
  loading:boolean = false
  ngOnInit(): void {
    this.loading = true
    this.getCarts()
  }
  getCarts(){
    if("cart" in localStorage){
      this.carts = JSON.parse(localStorage.getItem("cart")!)
      this.getTotal()
      this.loading = false
    }
  }
  clearCart(){
    this.carts = []
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.carts))
  }
  minsAmount(i:number){
    this.carts[i].quantity--
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.carts))
  }
  addAmount(i:number){
    this.carts[i].quantity++
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.carts))
  }
  delete(i:number){
    this.carts.splice(i,1)
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.carts))
  }
  detectChanges(){
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.carts))
  }
  getTotal(){
    this.total = 0
    for (const i in this.carts) {
      this.total += this.carts[i].product.price * this.carts[i].quantity
    }
  }
  addCart(){
    this.loading = true
    let products = this.carts.map(item => {
      return {productId:item.product.id, quantity:item.quantity}
    })
    let model = {
      userId:5,
      date:new Date(),
      products:products
    }
    this.service.createCart(model).subscribe({
      next: _ => {
        this.loading = false
        this.success = true
      },
      error: error => alert(error.message)
    })
  }
}
