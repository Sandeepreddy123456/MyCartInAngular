import { Component, OnInit } from '@angular/core';

import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(private _service:DataServiceService) { }
msg:any=[]
MyOrders:any=[];
orderDetails:any[][]=[];
orderDetails1:any=[];
orderDetails2:any=[];
orderDetails3:any=[];

  ngOnInit(): void {
  //   this.msg={
  //     "product":{"pid":localStorage.getItem("productOrderId")
  //   }
  // }
  // localStorage.removeItem("productOrderId");
  
  // console.log(localStorage.getItem("productOrderId"));
  // this._service.orders(this.msg).subscribe(
  //   (data)=>{
  //     console.log(data);
  //   }
  // )
  this._service.getProductsInOrders().subscribe(
    (data)=>{
      // console.log(JSON.parse(data));
      this.MyOrders.push(JSON.parse(data));
         
      for(var i=0;i<data.length;i++)
      {
        var j=0;
      
                this.orderDetails=this.MyOrders[i].myCartList;
                console.log(this.orderDetails);
                for(j=0;j<this.orderDetails.length;j++){
                  this.orderDetails1=this.orderDetails[j];
                 this.orderDetails2.push(this.orderDetails1.orderList);
                  console.log(this.orderDetails2);             
                }
                for (var item of this.orderDetails2) {

                      console.log(item); 
                      for(var it of item){
                    this.orderDetails3.push(it);
                    console.log(it.oid);
                    
                      }
                       
                  }
     
      }
  

    }
  )


  console.log(this.orderDetails2);
  console.log(this.MyOrders);
  console.log(this.orderDetails3);
  
  }

}
