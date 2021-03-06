import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticaionService: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
    this.authenticaionService.logout();
    this.router.navigate(['login']);
  }

}
