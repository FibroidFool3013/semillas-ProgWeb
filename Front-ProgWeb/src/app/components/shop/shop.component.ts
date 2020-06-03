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

  productos = [];
  json = "";

  constructor( private _productoService: ProductoService) {
    //this.getAllProducts();
  } 

  ngOnInit(): void {
    this._productoService.getAllProductos().subscribe(
      result =>{
      this.productos = result;
    }, error => {
      console.log(<any>error);
    }
    );
  }

  getAllProducts(){
    this._productoService.getAllProductos().subscribe(
      result =>{
      this.json = JSON.stringify(result);
    }, error => {
      console.log(<any>error);
    }
    );

    //var data = JSON.parse(this.json)
    //console.log(data);
    
    console.log(this.productos);
    console.log(this.productos);
  }

  getProductosSize(){
    this._productoService.getAllProductos().subscribe(productos =>{
      console.log(productos.length);
  });
  }

  getProducto(){
    this._productoService.getProducto('3').subscribe(productos =>{
        console.log(productos);
    });
  }



}
