import { Component, OnInit, Input } from '@angular/core';
import { ProductoService } from './../../services/producto.service';
import { ARIA_LIVE_DELAY } from '@ng-bootstrap/ng-bootstrap/util/accessibility/live';
import { Producto } from 'app/interfaces/producto';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  productos1 = [];
  productos2 = [];
  productos3 = [];

  constructor( private _productoService: ProductoService) {
    //this.getAllProducts();
  } 

  ngOnInit(): void {
    this._productoService.getProductosCategory('1').subscribe(
      result =>{
      this.productos1 = result;
    }, error => {
      console.log(<any>error);
    }
    );
    this._productoService.getProductosCategory('2').subscribe(
      result =>{
        this.productos2 = result;
      }, error => {
        console.log(<any>error);
      }
    );
    this._productoService.getProductosCategory('3').subscribe(
      result =>{
        this.productos3 = result;
      }, error => {
        console.log(<any>error);
      }
    );
  }

  getAllProducts(){
    console.log(this.productos1);
  }

  getProductosSize(){
    this._productoService.getAllProductos().subscribe(result =>{
      console.log(result.length);
  });
  }

  getProducto(){
    this._productoService.getProducto('3').subscribe(result =>{
        console.log(result);
    });
  }



}
