import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../../interfaces/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data!:Products
  @Output() item = new EventEmitter()
  isAdd:boolean = false
  amount:number = 0
  add(){
    this.item.emit({product:this.data,quantity:this.amount})
    this.isAdd = false
  }
}
