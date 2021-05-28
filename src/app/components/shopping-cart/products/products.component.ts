import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:Product[]=[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
   // console.log(this.productService.getProducts());
   this.productService.getProducts().subscribe((products)=>{
    this.productList=products;
    console.log(products);

    });
  }

}
