import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'app/interfaces/producto';
import { ARIA_LIVE_DELAY } from '@ng-bootstrap/ng-bootstrap/util/accessibility/live';
import { BaseCartItem, CartService } from 'ng-shopping-cart';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  @Input() product: Producto;

  public item: BaseCartItem;
  constructor(private cartService: CartService<BaseCartItem> ) {
   }

  ngOnInit(): void {
    //console.log(this.product.seccion_id);
    //console.log(this.product);
  }

  agregarAlCarrito(){
    this.item = new BaseCartItem();
    
    this.item.setId(this.product.id);
    this.item.setName(this.product.nombreProducto);
    this.item.setPrice(this.product.precio);
    this.item.setQuantity(1);

    console.log(this.item);

  }

}
