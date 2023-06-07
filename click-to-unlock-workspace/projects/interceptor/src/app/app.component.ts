import { UsersDataService } from './services/users-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptor';
  data: any;
  products: any;
  constructor(private userData: UsersDataService) {
    userData.users().subscribe((data: any) => {
      this.products = data.products;
      console.warn(data);
    });
  }

  AddProductData(data: any) {
    console.warn(data);
    this.userData.AddProductData(data).subscribe((result) => {
      console.warn('result', result);
    });
    this.products.push(data);
  }
}
