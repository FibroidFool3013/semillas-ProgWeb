import { Component, OnInit } from '@angular/core';
import { CheckoutPaypalSettings } from 'ng-shopping-cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  settings: CheckoutPaypalSettings = {
    business: 'myaccount@paypal.com',
    itemName: 'myMarketplaceAppCart',
    itemNumber: '1234',
    serviceName: 'MyBusiness',
    country: 'US'
  };

  emailValidator(email:string): boolean {
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!EMAIL_REGEXP.test(email)) {
        return false;
    }
    return true; 
}

}
