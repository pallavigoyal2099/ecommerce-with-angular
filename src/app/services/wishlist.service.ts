import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { wishlistUrl } from '../config/api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }
  addToWishlist(produtId:number){
    return this.http.post("http://localhost:3000/wishlist",{id:produtId})
  }
  removeFromWishlist(produtId:number){
    return this.http.delete("http://localhost:3000/wishlist"+'/'+produtId);
  }
  getFromWishlist(){
    return this.http.get("http://localhost:3000/wishlist").pipe(
      map((response:any[])=>
      {
        let productId=[];
        response.forEach(item=>productId.push(item.id))
        return productId
      })
      )
  }
}
