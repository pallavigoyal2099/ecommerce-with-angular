import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   apiUrl="http://localhost:3000/products";
  // products:Product[] =[
  //   new Product(1,'MI 5','New Camera',10000,"https://www.pngjoy.com/pngm/110/2277301_phone-vector-hand-phone-vector-png-png-download.png"),
  //   new Product(2,'MI 6','New Camera',12000,"https://img.freepik.com/free-vector/hand-holding-phone-isolated-flat-vector-illustration_74855-6823.jpg?size=626&ext=jpg"),
  //   new Product(3,'MI 7','New Camera',13000,"https://previews.123rf.com/images/microone/microone2002/microone200200129/140338430-hand-hold-phone-video-call-illustration-vector-smartphone-call-girl-selfie-woman-with-phone-app-chat.jpg"),
  //   new Product(4,'MI 8','New Camera',14000,"https://thumbs.dreamstime.com/b/video-call-chatting-online-friends-mobile-smartphone-app-stay-home-work-communication-remotely-hand-holding-179270204.jpg"),
  //   new Product(5,'MI 9','New Camera',15000,"https://image.freepik.com/free-vector/human-hand-holding-mobile-phone_74855-6532.jpg"),
  //   new Product(6,'MI 10','New Camera',16000,"https://image.freepik.com/free-vector/mobile-phone-background-design_1270-22.jpg"),
  //   new Product(7,'MI 10','New Camera',16000,"https://image.freepik.com/free-vector/mobile-phone-background-design_1270-22.jpg")

  // ]
  constructor(private http:HttpClient) { }
  getProducts():Observable <Product[]>{
    return this.http.get<Product[]>(this.apiUrl);

  }
}
