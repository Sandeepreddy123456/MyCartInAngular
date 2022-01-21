import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { DataServiceService } from "./data-service.service";





@Injectable({
    providedIn: 'root'
  })
  export class orderResolver implements Resolve<any>{
      constructor(  private _service:DataServiceService){}
  
  
      resolve(): Observable<any> {
        return this._service.getProductsInOrders();
  
  }
  }