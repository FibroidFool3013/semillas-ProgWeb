import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'app/interfaces/producto';
import { CartService, BaseCartItem } from 'ng-shopping-cart';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  @Input() product: Producto;
  public item: BaseCartItem;
  
  constructor(private _cartService: CartService<BaseCartItem>) { }

  ngOnInit(): void {
  }

  agregarAlCarrito(){
    console.log(this.product.id);
    console.log(this._cartService.getItem(this.product.id));
  }

}
