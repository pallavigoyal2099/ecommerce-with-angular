export class Product {
  id:number;
  name:string;
  description:string;
  price:number;
  imageUrl:string;
  constructor(id:number,name:string,description:string="",price:number=0,imageUrl:string="https://static.vecteezy.com/system/resources/thumbnails/001/236/541/small/hand-holding-phone-for-mobile-data-security.jpg"){
    this.id=id;
    this.name=name;
    this.description=description;
    this.price=price;
    this.imageUrl=imageUrl;
  }
}
