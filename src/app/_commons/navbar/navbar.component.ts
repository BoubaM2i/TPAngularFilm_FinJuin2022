import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pages : any[] = [
    {
      name: 'home',
      uri : 'home'
    },
    {
      name: 'products',
      uri:'products'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
