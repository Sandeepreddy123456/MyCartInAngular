import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(private _service:DataServiceService,private activatedRoute:ActivatedRoute) { }
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

  // this._service.getProductsInOrders().subscribe(
  //   (data)=>{
    
    
      // console.log(JSON.parse(data));
      this.activatedRoute.data.subscribe(data=>{
    
    
        console.log(JSON.parse(data.orderData));
        this.MyOrders.push(JSON.parse(data.orderData));
         
      // for(var i=0;i<data.length;i++)
      // {
      //   var j=0;
      
      //           this.orderDetails=this.MyOrders[i].myCartList;
      //           // this.orderDetails=this.MyOrders[i].itemsList;
      //           console.log(this.orderDetails);
      //           for(j=0;j<this.orderDetails.length;j++){
      //             this.orderDetails1=this.orderDetails[j];
      //            this.orderDetails2.push(this.orderDetails1.orderList);
      //             console.log(this.orderDetails2);             
      //           }
      //           for (var item of this.orderDetails2) {

      //                 console.log(item); 
      //                 for(var it of item){
      //               this.orderDetails3.push(it);
      //               console.log(it.oid);
                    
      //                 }
                       
      //             }
     
      // }

      ////////////////////////////////////////////////////////////////////
      for(var i=0;i<data.orderData.length;i++){
        this.orderDetails=this.MyOrders[i].myorderlist;
        console.log(this.orderDetails);
      //   for(var items of this.orderDetails)
      //   {
      //       console.log(items);
      //       // for(var it of items ){
      //       //   this.orderDetails1.push(it);
      //       //   console.log(this.orderDetails1);
      
      //       // }

      // }
   
    }

    }
  )

  
  }

}
