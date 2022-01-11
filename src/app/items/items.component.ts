import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private _service:DataServiceService,private route:Router,private httpClient :HttpClient)  { }
msg:any=[]
  ngOnInit(): void {
 

console.log(localStorage.getItem("customerId"));




   ////////////////////////////////////////////////
   this.httpClient.get('http://localhost:8082/products')
   .subscribe(
     res => {
  
       this.retrieveResonse1 = res;
       console.log(this.retrieveResonse1)
      //  this.base64Data1 = this.retrieveResonse1.picByte;
      //  this.retrievedImage1 = 'data:image/jpeg;base64,' + this.base64Data1;
       
     }
   );


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
})
  
  
   this.route.navigate(['/cart']);

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
  retrieveResonse1: any=[];

  message: string;
  imageName: any;
   public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }


  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile);
    uploadImageData.append('name', "sandeep");
    uploadImageData.append('price', "200");
    uploadImageData.append('discription', "fullstack");
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );


  }
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/get/' + this.imageName)
      .subscribe(
        res => {
     
          this.retrieveResonse = res;
          console.log(this.retrieveResonse)
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }



}
