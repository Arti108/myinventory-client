import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private baseUrl="http://localhost:8080/ims/api/customers"
  constructor(private http: HttpClient) { }

  getCustomersList() : Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCustomers(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
    }
    
  newCustomers(customers: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, customers);
      }
    updateCustomers(id: number, value: any): Observable<object>{
      return this.http.put(`${this.baseUrl}/${id}`,value)
    }

    deleteCustomers(cust_id: number): Observable<any>{
      return this.http.delete(`${this.baseUrl}/${cust_id}` , { responseType: 
        'text' });
    }
    
}
