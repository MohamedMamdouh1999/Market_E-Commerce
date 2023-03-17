export interface Carts {
  userId:number,
  date:Date,
  products:{
    productId: number,
    quantity: number
  }[]
}
