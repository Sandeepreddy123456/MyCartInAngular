import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _service:DataServiceService,private route:Router,private fb:FormBuilder) { }
msg:any=[];
products:any;
productsDetails:any=[];

// @Input() public items;
  ngOnInit(): void {
  
    //getting product details in cart
      this._service.getProductsInCart().subscribe(
        (data)=>{
          console.log(JSON.parse(data));
          this.products=JSON.parse(data);
       
          for(var i=0;i<data.length;i++)
               {
                //  console.log(i);
          console.log(this.products[i].product);
                    // this.productsDetails.push(this.products[i].mcid);
                      this.productsDetails.push(this.products[i].product);
                      // console.log(this.productsDetails);
               }
        }
      
        )
        console.log("san");
        console.log(this.productsDetails);

        //getting cart id which is added to cart

  };
  
  id:any;
  removecart(id){



   
  }
  buy(id:any,pid:any){

console.log(pid);
localStorage.setItem("productOrderId",pid);
 localStorage.setItem("orderId",id);
 this.msg={
  "product":{"pid":pid}
}

this._service.orders(this.msg).subscribe(
  (data)=>{
    console.log(data);
  }
)

 console.log(localStorage.getItem("orderId"));
    this.route.navigate(['/myOrders']);

  }

}
