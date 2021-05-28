import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem:Product;
  constructor(private messengerService:MessengerService,private cartService:CartService) { }

  ngOnInit(): void {
  }
  onAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(()=>{
      this.messengerService.sendMsg(this.productItem);
    })
    //console.log(this.productItem);
  }
}
