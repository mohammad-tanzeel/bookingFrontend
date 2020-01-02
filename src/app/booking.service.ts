import { Injectable } from '@angular/core';
 import {HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http'; 
// import { RequestOptions } from '@angular/http';
import {IBooking} from './booking';
import {IEmployee} from './employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private _url: string = "http://localhost:9091/booking/all";
  private _urlpost: string = "http://localhost:9091/booking/save";
  private _url1: string = "/assets/data/employee.json";

 private postdata =  {
    "source":"DEl",
    "destination":"DOM",
    "startDate":"2019-11-14",
    "endDate":"2019-11-21",
    "passengers":"3"    
  };
  constructor(private http: HttpClient) { }
  getBookings():Observable<IBooking[]>{
    // let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    // let options = { headers: headers, crossDomain: true, withCredentials: true };
    return  this.http.get<IBooking[]>(this._url);
      //.map(this.extractData)
    // .catch(this.handleErrorObservable);;
  }

   getEmployees():Observable<IEmployee[]>{
    return  this.http.get<IEmployee[]>(this._url1);
   
  }

//   addBookWithObservable(book:IBooking): Observable<IBooking> {
//     // let headers = new Headers({ 'Content-Type': 'application/json' });
//     //   let options = new RequestOptions({ headers: headers });
//     return this.http.post(this._urlpost, IBooking).map(data=>
//       data);
      
// }

public postBooking(){
  return this.http.post(this._urlpost,this.postdata).toPromise().then((data:any) =>{
    console.log(data);
  } );
}


private extractData(res: Response) {
  let body = res.json();
    return body || {};
}
private handleErrorObservable (error: Response | any) {
console.error(error.message || error);
return Observable.throw(error.message || error);
}
}


