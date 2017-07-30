import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userData: Object;

  constructor(private router: Router) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));   
  }

  logout() {
    this.userData = {userType: 'n'};
    console.log('logout')
    localStorage.setItem('userData', JSON.stringify(this.userData));
    this.router.navigate([`/login`]);
  }
}
