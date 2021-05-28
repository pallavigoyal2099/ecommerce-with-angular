import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems=[
    // {id:1,productId:2,productName:"MI 4",qty:4,price:40000},
    // {id:1,productId:3,productName:"MI 5",qty:2,price:30000},
    // {id:1,productId:4,productName:"MI 6",qty:3,price:25000},
    // {id:1,productId:5,productName:"MI 7",qty:1,price:10000}
  ];
  cardTotal=0;
  constructor(private messengerService:MessengerService) { }

  ngOnInit(): void {

    this.messengerService.getMsg().subscribe((product:Product)=>{
      // console.log(product);
      this.addProductToCart(product);

  })
}
  addProductToCart( product:Product){
    let productExists:boolean=false;
    for(let i in this.cartItems){
          if(this.cartItems[i].productId===product.id){
            this.cartItems[i].qty++;
            productExists=true;
            break;
          }
        }
    if(!productExists){
      this.cartItems.push({
            productId:product.id,
            productName:product.name,
            qty:1,
            price:product.price,
          })
    }
    // if(this.cartItems.length===0){
    //   this.cartItems.push({
    //     productId:product.id,
    //     productName:product.name,
    //     qty:1,
    //     price:product.price,
    //   })
    // }
    // else{
    //   for(let i in this.cartItems){
    //     if(this.cartItems[i].productId===product.id){
    //       this.cartItems[i].qty++;
    //     }else{
    //       this.cartItems.push({
    //         productId:product.id,
    //         productName:product.name,
    //         qty:1,
    //         price:product.price,
    //       })
    //     }
    //   }
    // }
    this.cardTotal=0;
    this.cartItems.forEach(item=>{
      this.cardTotal+=(item.qty*item.price)
    })
  }
}
