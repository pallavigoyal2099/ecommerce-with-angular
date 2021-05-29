import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem:Product;
 // private wishlist:[];
 @Input() addedToWishlist:boolean=false;
  constructor(private messengerService:MessengerService,private cartService:CartService,private wishlist:WishlistService) { }

  ngOnInit(): void {
  }
  onAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(()=>{
      this.messengerService.sendMsg(this.productItem);
    })
    //console.log(this.productItem);
  }
  handleAddToWishlist(){
    this.wishlist.addToWishlist(this.productItem.id).subscribe(()=>{
      this.addedToWishlist=true;
      console.log("Added to wishlist");

    })
  }
  removeFromWishlist(){
    this.wishlist.removeFromWishlist(this.productItem.id).subscribe(()=>{
      this.addedToWishlist=false;
      console.log("Remove from Wisglist");

    })
  }
}
