import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  getCartItems():Observable<Cart[]>{
   return this.http.get<Cart[]>(cartUrl).pipe(
     map((response:any[])=>{
let cartItems:Cart[]=[];
for(let item of response){
  let productExists:boolean=false;
  for(let i in cartItems){
        if(cartItems[i].productId===item.product.id){
          cartItems[i].qty++;
          productExists=true;
          break;
        }
      }
  if(!productExists){
    cartItems.push(new Cart(item.id,item.product));
  }
}
return cartItems;
     })
   );
  }
  addProductToCart(product:Product):Observable<any>{
    return this.http.post("http://localhost:3000/carts",{product});
  }
}
