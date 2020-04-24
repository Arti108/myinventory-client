import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {


  private baseUrl="http://localhost:8080/ims/api/invoice"
  constructor(private http: HttpClient) { }

  getInvoiceList() : Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  /*getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
    }*/
}
