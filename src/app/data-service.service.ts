import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor( private http:HttpClient) { }

  public login(registrationForm):Observable<any>{
     console.log(registrationForm);
    //  console.log(localStorage.getItem("customerId"));

      return this.http.post<any>("http://localhost:8082/customer",registrationForm,{responseType:'text' as 'json'})
     
    }
   
    public cart(cart):Observable<any>{
      console.log(cart);
     //  console.log(localStorage.getItem("customerId"));
 
       return this.http.post<any>("http://localhost:8082/cart/"+localStorage.getItem("customerId"),cart,{responseType:'text' as 'json'})
      
     }


     public getitems():Observable<any>{
      // console.log(cart);
     //  console.log(localStorage.getItem("customerId"));
 
       return this.http.get<any>("http://localhost:8082/products",{responseType:'text' as 'json'})
      
     }
     public getProductsInCart():Observable<any>{
      // console.log();
     //  console.log(localStorage.getItem("customerId"));
 
       return this.http.get<any>("http://localhost:8082/customer/cart/"+localStorage.getItem("customerId"),{responseType:'text' as 'json'})
      
     }


     public orders(orders):Observable<any>{
      console.log(orders);
     //  console.log(localStorage.getItem("customerId"));
 
       return this.http.post<any>("http://localhost:8082/order/"+localStorage.getItem("orderId"),orders,{responseType:'text' as 'json'})
      
     }

     public getProductsInOrders():Observable<any>{
      // console.log();
     //  console.log(localStorage.getItem("customerId"));
 
       return this.http.get<any>("http://localhost:8082/customer/"+localStorage.getItem("customerId"),{responseType:'text' as 'json'})
      
     }
     //issues in  my project is removing card details after 

     public deleteCartdetails(id:any):Observable<any>{
    
    console.log(id);
    
       return this.http.delete<any>("http://localhost:8082/carts/"+id,{responseType:'text' as 'json'})
      
     }

 


}
