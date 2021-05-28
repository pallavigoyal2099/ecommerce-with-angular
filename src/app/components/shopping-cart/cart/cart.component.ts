import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems=[];
  cardTotal=0;
  constructor(private messengerService:MessengerService,private cartService:CartService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
}
handleSubscription(){
  this.messengerService.getMsg().subscribe((product:Product)=>{
    // console.log(product);
    //this.addProductToCart(product);
    this.loadCartItems();
})
}
loadCartItems(){
this.cartService.getCartItems().subscribe((items:Cart[])=>{
  console.log(items);
  this.cartItems=items;
  this.calculateCartTotal();
})
}
  // addProductToCart( product:Product){
  //   let productExists:boolean=false;
  //   for(let i in this.cartItems){
  //         if(this.cartItems[i].productId===product.id){
  //           this.cartItems[i].qty++;
  //           productExists=true;
  //           break;
  //         }
  //       }
  //   if(!productExists){
  //     this.cartItems.push({
  //           productId:product.id,
  //           productName:product.name,
  //           qty:1,
  //           price:product.price,
  //         })
  //   }
  //   // if(this.cartItems.length===0){
  //   //   this.cartItems.push({
  //   //     productId:product.id,
  //   //     productName:product.name,
  //   //     qty:1,
  //   //     price:product.price,
  //   //   })
  //   // }
  //   // else{
  //   //   for(let i in this.cartItems){
  //   //     if(this.cartItems[i].productId===product.id){
  //   //       this.cartItems[i].qty++;
  //   //     }else{
  //   //       this.cartItems.push({
  //   //         productId:product.id,
  //   //         productName:product.name,
  //   //         qty:1,
  //   //         price:product.price,
  //   //       })
  //   //     }
  //   //   }
  //   // }
  //   this.calculateCartTotal();
  // }
  calculateCartTotal(){
    this.cardTotal=0;
    this.cartItems.forEach(item=>{
      this.cardTotal+=(item.qty*item.price)
    })
  }
}
