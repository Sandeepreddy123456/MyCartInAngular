import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { DataServiceService } from "./data-service.service";

// @Injectable()

@Injectable({
  providedIn: 'root'
})
export class cartResolver implements Resolve<any>{
    constructor(  private _service:DataServiceService){}


    resolve(): Observable<any> {
      return this._service.getProductsInCart();

}
}