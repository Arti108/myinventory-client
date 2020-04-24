import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { OrderService } from "../order.service";
import { Order } from "../order";
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Observable<Order[]>
  constructor(private orderService: OrderService,private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.orders = this.orderService.getOrdersList();
  }

}
