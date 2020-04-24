import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { CustomersService } from "../customers.service";
import { Customers } from "../customers";
import { Router } from '@angular/router';


@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customerss: Observable<Customers[]>
  constructor(private customersService: CustomersService,private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.customerss = this.customersService.getCustomersList();
  }

  customersDetails(id: number){
    this.router.navigate(['details', id]);
  }

  editCustomers(id: number){
    this.router.navigate(['update',id])
  }

  deleteCustomers(id: number){
    this.customersService.deleteCustomers(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
      
    
  }


}
