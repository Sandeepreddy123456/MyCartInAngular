import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  retrieveResonse1: any=[];
  // itemsData1:any=[];
  constructor(private _service:DataServiceService,private route:Router,private httpClient :HttpClient,private activatedRoute:ActivatedRoute ) 
   {
    // this.retrieveResonse1=  this.activatedRoute.data;
    // console.log(this.retrieveResonse1)
    }
msg:any=[]
  ngOnInit(): void {
 
    this.activatedRoute.data.subscribe(data=>{
      this.retrieveResonse1=JSON.parse(data.itemsData);
      console.log(this.retrieveResonse1);
      
    })

console.log(localStorage.getItem("customerId"));


// for(var i of this.activatedRoute.snapshot.data)


   ////////////////////////////////////////////////
  //  this.httpClient.get('http://localhost:8082/products')


  // this._service.getitems()
  //  .subscribe(
  //    res => {
  
  //      this.retrieveResonse1 = JSON.parse(res);
  //      console.log(this.retrieveResonse1)
       
  //    } );


  }
 // id:any;
  cart(id:any){
    console.log(id);
    localStorage.setItem("productId",id);
    this.msg={
      "product":{"pid":localStorage.getItem("productId")
      
    }
  }
    this._service.cart(this.msg).subscribe(
      (data)=>{
console.log(data);
  
this.route.navigate(['/cart']);
})
  


  }

  buy(id:any)
  {
    console.log(id);

  // this._services.setOrder(id);
  this.route.navigate(['/myOrders']);
  }

  selectedFile: File;
  retrievedImage: any;
  retrievedImage1: any;
  base64Data: any;
  base64Data1: any=[];
  retrieveResonse: any;


  message: string;
  imageName: any;
  //  public onFileChanged(event) {
  //   //Select File
  //   this.selectedFile = event.target.files[0];
  // }


  //Gets called when the user clicks on submit to upload the image
  // onUpload() {
  //   console.log(this.selectedFile);
    
  //   //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  //   const uploadImageData = new FormData();
  //   uploadImageData.append('imageFile', this.selectedFile);
  //   uploadImageData.append('name', "sandeep");
  //   uploadImageData.append('price', "200");
  //   uploadImageData.append('discription', "fullstack");
  
  //   //Make a call to the Spring Boot Application to save the image
  //   this.httpClient.post('http://localhost:8080/upload', uploadImageData, { observe: 'response' })
  //     .subscribe((response) => {
  //       if (response.status === 200) {
  //         this.message = 'Image uploaded successfully';
  //       } else {
  //         this.message = 'Image not uploaded successfully';
  //       }
  //     }
  //     );


  // }
  // getImage() {
  //   //Make a call to Sprinf Boot to get the Image Bytes.
  //   this.httpClient.get('http://localhost:8080/get/' + this.imageName)
  //     .subscribe(
  //       res => {
     
  //         this.retrieveResonse = res;
  //         console.log(this.retrieveResonse)
  //         this.base64Data = this.retrieveResonse.picByte;
  //         this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  //       }
  //     );
  // }



}
