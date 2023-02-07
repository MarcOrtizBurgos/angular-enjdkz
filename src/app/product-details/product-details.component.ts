import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart.service';

import UsersJson from '../../assets/users.json';

interface USERS {
  id: String;
  name: String;
  surname: String;
  email: String;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  user: USERS | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('userId'));

    // Find the product that correspond with the id provided in route.
    this.user = UsersJson.find((user) => user.id === productIdFromRoute);
  }
}
