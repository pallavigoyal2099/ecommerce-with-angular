import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:Product[]=[];
  wishlistItems:number[]=[];
  constructor(private productService:ProductService,private wishlist:WishlistService) { }

  ngOnInit(): void {
    this.loadProduct();
    this.loadWishlist();
  }
  loadProduct(){
    this.productService.getProducts().subscribe((products)=>{
      this.productList=products;
      //console.log(products);
      });
  }
  loadWishlist(){
    this.wishlist.getFromWishlist().subscribe((productId)=>{
    console.log(productId)
      this.wishlistItems=productId
    })
  }
}
