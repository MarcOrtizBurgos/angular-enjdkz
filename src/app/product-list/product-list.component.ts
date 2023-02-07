import { Component } from '@angular/core';

import UsersJson from '../../assets/users.json';

interface USERS {
  id: String;
  name: String;
  surname: String;
  email: String;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  Users: USERS[] = UsersJson;
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
